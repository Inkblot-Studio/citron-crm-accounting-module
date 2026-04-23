#!/usr/bin/env node
/**
 * HillCode – Citron CRM Accounting dev TUI (Vite / Module Federation).
 * @see instructions/HILLCODE_UNIVERSAL_GUIDE.md
 */

import { spawn } from 'node:child_process'
import * as fs from 'node:fs'
import * as path from 'node:path'
import process from 'node:process'
import * as readline from 'node:readline'

const PROJECT_NAME = 'Citron CRM Accounting'
const PACKAGE_NAME = 'citron-accounting-frontend'

/** @type {{ id: string, displayName: string }[]} */
const CLIENTS = [
  { id: 'citron', displayName: 'Citron CRM Accounting' },
  { id: 'demo', displayName: 'Accounting (Demo)' },
]

const CLIENT_IDS = CLIENTS.map((c) => c.id)

function findProjectRoot(start = process.cwd()) {
  let dir = path.resolve(start)
  for (;;) {
    const pkg = path.join(dir, 'package.json')
    if (fs.existsSync(pkg)) {
      try {
        const j = JSON.parse(fs.readFileSync(pkg, 'utf8'))
        if (j.name === PACKAGE_NAME) return dir
      } catch {
        /* ignore */
      }
    }
    const parent = path.dirname(dir)
    if (parent === dir) return null
    dir = parent
  }
}

/** @param {string[]} argv */
function parseArgs(argv) {
  const out = { help: false, client: /** @type {string | null} */ (null), cmd: /** @type {string | null} */ (null) }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '-h' || a === '--help') out.help = true
    else if (a === '-c' || a === '--client') out.client = argv[++i] ?? null
    else if (a.startsWith('--client=')) out.client = a.slice('--client='.length) || null
    else if (a === '--cmd') out.cmd = argv[++i] ?? null
    else if (a.startsWith('--cmd=')) out.cmd = a.slice('--cmd='.length) || null
  }
  return out
}

function help() {
  console.log(`hillcode – ${PROJECT_NAME} dev tool

  npm run hillcode                              # TUI
  npm run hillcode -- -c citron --cmd run
  npm run hillcode -- -c demo --cmd web
  npm run hillcode -- -c citron --cmd android
  npm run hillcode -- -c demo --cmd ios

  -c, --client   ${CLIENT_IDS.join(' | ')}
  --cmd          run | web | android | ios
`)
}

function supportsAnsi() {
  return Boolean(process.stdout.isTTY && process.env.NO_COLOR == null)
}

/** @param {string} s @param {{ dim?: boolean, green?: boolean, red?: boolean }} [style] */
function out(s, style = {}) {
  const { dim, green, red } = style
  if (supportsAnsi()) {
    if (dim) process.stdout.write('\x1B[2m')
    if (green) process.stdout.write('\x1B[32m')
    if (red) process.stdout.write('\x1B[31m')
  }
  console.log(s)
  if (supportsAnsi() && (dim || green || red)) process.stdout.write('\x1B[0m')
}

function cls() {
  if (supportsAnsi()) process.stdout.write('\x1B[2J\x1B[H')
}

/** @param {string} prompt */
function ask(prompt) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
  return new Promise((resolve) => {
    rl.question(prompt, (line) => {
      rl.close()
      resolve(line)
    })
  })
}

class HillCode {
  /** @param {string} root Project root (directory with package.json). */
  constructor(root) {
    this.root = root
  }

  /** @param {string} client */
  async runInject(client) {
    const injectScript = path.join(this.root, 'scripts', 'inject_client_config.sh')
    if (!fs.existsSync(injectScript)) {
      out(`  inject script not found: ${injectScript}`, { red: true })
      return false
    }
    out(`  Running inject_client_config.sh ${client}`, { dim: true })
    const code = await new Promise((resolve) => {
      const child = spawn('bash', [injectScript, client], {
        cwd: this.root,
        stdio: 'inherit',
      })
      child.on('close', (c) => resolve(c ?? 1))
    })
    return code === 0
  }

  /** @param {string} client */
  async runDev(client) {
    out('')
    if (!(await this.runInject(client))) process.exit(1)
    out('  npm run dev (after inject)', { dim: true })
    out('')
    const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    const code = await new Promise((resolve) => {
      const child = spawn(npm, ['run', 'dev'], {
        cwd: this.root,
        stdio: 'inherit',
        env: { ...process.env, VITE_CLIENT: client },
      })
      child.on('close', (c) => resolve(c ?? 1))
    })
    process.exit(code)
  }

  /** @param {string} platform @param {string} client */
  async runBuild(platform, client) {
    const buildScript = path.join(this.root, 'build')
    if (!fs.existsSync(buildScript)) {
      out('  ./build not found (run from project root)', { red: true })
      return false
    }
    out(`  ./build ${platform} ${client}`, { dim: true })
    const code = await new Promise((resolve) => {
      const child = spawn('./build', [platform, client], {
        cwd: this.root,
        stdio: 'inherit',
        shell: true,
      })
      child.on('close', (c) => resolve(c ?? 1))
    })
    return code === 0
  }

  /** @returns {Promise<string | null>} */
  async pickClient() {
    out('')
    for (let i = 0; i < CLIENTS.length; i++) {
      out(`  ${i + 1} ${CLIENTS[i].id} — ${CLIENTS[i].displayName}`)
    }
    const raw = (await ask(`  client (1-${CLIENTS.length}): `)).trim()
    const n = Number.parseInt(raw, 10)
    if (!Number.isFinite(n) || n < 1 || n > CLIENTS.length) return null
    return CLIENTS[n - 1].id
  }

  async tui() {
    cls()
    out('')
    out(`  hillcode · ${PROJECT_NAME}`, { dim: true })
    out('  ─────────────────────────')
    out('')
    out('  1  run      Start dev server (Vite)')
    out('  2  web      Production build → dist/')
    out('  3  android  (not used — web module)')
    out('  4  ios      (not used — web module)')
    out('  q  exit')
    out('')

    const choice = (await ask('  > ')).trim().toLowerCase()
    if (choice === 'q' || choice === '') process.exit(0)

    const client = await this.pickClient()
    if (client == null) {
      out('  invalid client', { red: true })
      out('')
      await ask('  [Enter]')
      await this.tui()
      return
    }

    switch (choice) {
      case '1':
        await this.runDev(client)
        break
      case '2':
        out('')
        process.exit((await this.runBuild('web', client)) ? 0 : 1)
        break
      case '3':
        out('')
        process.exit((await this.runBuild('android', client)) ? 0 : 1)
        break
      case '4':
        out('')
        process.exit((await this.runBuild('ios', client)) ? 0 : 1)
        break
      default:
        out('  unknown', { red: true })
    }

    out('')
    await ask('  [Enter]')
    await this.tui()
  }

  /**
   * @param {string} c
   * @param {string | null} client
   */
  async cmd(c, client) {
    const cl =
      client ??
      (() => {
        console.error(`client required (-c ${CLIENT_IDS.join(' | ')})`)
        process.exit(1)
      })()

    if (!CLIENT_IDS.includes(cl)) {
      console.error(`unknown client: ${cl}`)
      process.exit(1)
    }

    switch (c) {
      case 'run':
        await this.runDev(cl)
        break
      case 'web':
        out('')
        process.exit((await this.runBuild('web', cl)) ? 0 : 1)
        break
      case 'android':
        out('')
        process.exit((await this.runBuild('android', cl)) ? 0 : 1)
        break
      case 'ios':
        out('')
        process.exit((await this.runBuild('ios', cl)) ? 0 : 1)
        break
      default:
        console.error(`unknown cmd: ${c}`)
        process.exit(1)
    }
  }
}

async function main() {
  const parsed = parseArgs(process.argv.slice(2))
  if (parsed.help) {
    help()
    process.exit(0)
  }

  const root = findProjectRoot()
  if (root == null) {
    console.error(`${PACKAGE_NAME} (package.json) not found`)
    process.exit(1)
  }

  const h = new HillCode(root)

  if (parsed.cmd != null) {
    await h.cmd(parsed.cmd, parsed.client)
    process.exit(0)
  }

  await h.tui()
}

main().catch((e) => {
  console.error(String(e))
  process.exit(1)
})
