/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLIENT?: string
  /**
   * When this app is built as a federated remote, set to the public origin
   * where its `public/` files are served (no trailing slash), e.g.
   * `https://accounting.example.com`. Logo paths like `/svg/x.svg` are then
   * loaded from that host instead of the shell app’s origin.
   */
  readonly VITE_ACCOUNTING_PUBLIC_ORIGIN?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
