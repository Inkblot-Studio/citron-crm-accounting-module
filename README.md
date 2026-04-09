# Citron Accounting Module

A **Module Federation** remote that exposes invoicing features (invoices list, deals pipeline, AI invoice wizard) as a React component for any Citron CRM host application.

## Quick start

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # outputs dist/ including remoteEntry.js
npm run preview   # serves the production build at http://localhost:5002
```

## Host integration

| Property | Value |
|----------|-------|
| **Remote name** | `accounting` |
| **Exposed module** | `./Accounting` |
| **Host import** | `import('accounting/Accounting')` |
| **Production asset** | `/assets/remoteEntry.js` |

Example `vite.config.ts` on the host:

```ts
federation({
  name: 'host',
  remotes: {
    accounting: 'https://<your-deployment>.vercel.app/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'react-router-dom'],
})
```

The exported component (`AccountingWithProvider`) ships with its own `ToastProvider` and `Toaster`, so it does not rely on the host’s toast context.

## Deployment URL

In production (e.g. Vercel), `remoteEntry.js` is served at:

```
https://<your-project>.vercel.app/assets/remoteEntry.js
```

## Shared dependencies

These packages are declared as `shared` in the federation config to avoid duplicate bundles with the host:

- `react` (>=18)
- `react-dom` (>=18)
- `react-router-dom` (>=7)
- `@citron-systems/citron-ui`
- `@citron-systems/citron-ds`

## Notes and limitations

- The remote **does not depend** on host context or providers. `ToastContext` is implemented inside this module.
- Visual tokens (colors, radii, typography) come from `@citron-systems/citron-ds`. If the host loads the same package, styles stay aligned.
- `lucide-react` is used for icons; it is not listed in `shared` because tree-shaking keeps the footprint small.
