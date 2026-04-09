# Citron Accounting Module

Remote de **Module Federation** que expone la funcionalidad de facturación (invoices, deals pipeline, AI invoice wizard) como componente React consumible por cualquier host Citron CRM.

## Inicio rápido

```bash
npm install
npm run dev       # servidor local en http://localhost:5173
npm run build     # genera dist/ con remoteEntry.js
npm run preview   # sirve el build en http://localhost:5002
```

## Integración en el host

| Propiedad | Valor |
|-----------|-------|
| **Nombre del remote** | `accounting` |
| **Módulo expuesto** | `./Accounting` |
| **Import en el host** | `import('accounting/Accounting')` |
| **Asset de producción** | `/assets/remoteEntry.js` |

Ejemplo de configuración en el `vite.config.ts` del host:

```ts
federation({
  name: 'host',
  remotes: {
    accounting: 'https://<tu-deploy>.vercel.app/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'react-router-dom'],
})
```

El componente exportado (`AccountingWithProvider`) incluye su propio `ToastProvider` y `Toaster`, por lo que no requiere contexto de toasts del host.

## URL de despliegue

En producción (p. ej. Vercel), el `remoteEntry.js` queda disponible en:

```
https://<tu-proyecto>.vercel.app/assets/remoteEntry.js
```

## Dependencias compartidas

Las siguientes librerías se declaran como `shared` en la configuración de federation para evitar duplicados con el host:

- `react` (>=18)
- `react-dom` (>=18)
- `react-router-dom` (>=7)
- `@citron-systems/citron-ui`
- `@citron-systems/citron-ds`

## Notas y límites

- El remote **no depende** de ningún contexto o provider del host. `ToastContext` se implementa localmente dentro del módulo.
- Los tokens visuales (colores, radios, tipografía) provienen de `@citron-systems/citron-ds`. Si el host importa esa misma librería, los estilos serán consistentes automáticamente.
- `lucide-react` se usa para iconografía; no está en `shared` porque su tree-shaking ya minimiza el impacto.
