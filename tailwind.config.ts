import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    './node_modules/@citron-systems/citron-ui/**/*.{js,mjs}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--inkblot-typography-font-family-sans)'],
        mono: ['var(--inkblot-typography-font-family-mono)'],
        display: ['var(--inkblot-typography-font-family-display)'],
      },
      colors: {
        background: 'var(--inkblot-semantic-color-background-primary)',
        foreground: 'var(--inkblot-semantic-color-text-primary)',
        primary: {
          DEFAULT: 'var(--inkblot-semantic-color-interactive-primary)',
          foreground: 'var(--inkblot-semantic-color-text-inverse)',
        },
        secondary: {
          DEFAULT: 'var(--inkblot-semantic-color-interactive-secondary)',
          foreground: 'var(--inkblot-semantic-color-text-primary)',
        },
        muted: {
          DEFAULT: 'var(--inkblot-semantic-color-background-tertiary)',
          foreground: 'var(--inkblot-semantic-color-text-secondary)',
        },
        card: {
          DEFAULT: 'var(--inkblot-semantic-color-background-secondary)',
          foreground: 'var(--inkblot-semantic-color-text-primary)',
        },
        popover: {
          DEFAULT: 'var(--inkblot-semantic-color-background-secondary)',
          foreground: 'var(--inkblot-semantic-color-text-primary)',
        },
        border: 'var(--inkblot-semantic-color-border-default)',
        ring: 'var(--inkblot-semantic-color-border-focus)',
        destructive: {
          DEFAULT: 'var(--inkblot-semantic-color-status-error)',
          foreground: 'var(--inkblot-semantic-color-text-inverse)',
        },
        accent: {
          DEFAULT: 'var(--inkblot-color-accent-citron-400)',
          foreground: 'var(--inkblot-semantic-color-text-inverse)',
        },
        sidebar: 'var(--inkblot-semantic-color-background-secondary)',
        'surface-0': 'var(--inkblot-semantic-color-background-primary)',
        'surface-1': 'var(--inkblot-semantic-color-background-secondary)',
        'surface-2': 'var(--inkblot-semantic-color-background-tertiary)',
        'surface-3': 'var(--inkblot-semantic-color-border-strong)',
        'status-success': 'var(--inkblot-semantic-color-status-success)',
        'status-warning': 'var(--inkblot-semantic-color-status-warning)',
        'status-danger': 'var(--inkblot-semantic-color-status-error)',
        'status-info': 'var(--inkblot-semantic-color-status-info)',
        'citrus-lime': 'var(--inkblot-semantic-color-status-success)',
        'citrus-lemon': 'var(--inkblot-semantic-color-status-warning)',
        'citrus-orange': 'var(--inkblot-color-accent-citron-600)',
        'citrus-green': 'var(--inkblot-color-semantic-success-main)',
      },
      borderRadius: {
        sm: 'var(--inkblot-radius-sm)',
        DEFAULT: 'var(--inkblot-radius-md)',
        md: 'var(--inkblot-radius-md)',
        lg: 'var(--inkblot-radius-lg)',
        xl: 'var(--inkblot-radius-xl)',
        '2xl': 'var(--inkblot-radius-2xl)',
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        },
        'pop-scale-in': {
          from: { opacity: '0', transform: 'translateY(10px) scale(0.97)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'menu-pop-in': {
          from: { opacity: '0', transform: 'translateY(-4px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        /** Opacity only — safe alongside inline drag `transform` on the same node */
        'dialog-enter': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'popover-enter': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out both',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        shimmer: 'shimmer 1.5s ease-in-out infinite',
        'pop-scale-in': 'pop-scale-in 0.22s cubic-bezier(0.16, 1, 0.3, 1) both',
        'menu-pop-in': 'menu-pop-in 0.2s cubic-bezier(0.16, 1, 0.3, 1) both',
        /** Use on draggable overlays so entrance animation does not fight drag translate */
        'dialog-enter': 'dialog-enter 0.2s ease-out both',
        'popover-enter': 'popover-enter 0.18s ease-out both',
      },
    },
  },
  plugins: [],
} satisfies Config
