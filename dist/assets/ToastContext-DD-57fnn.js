import { importShared } from './__federation_fn_import-Co3laqTB.js';
import { j as jsxRuntimeExports } from './jsx-runtime-XI9uIe3W.js';

const {createContext,useContext,useState,useCallback} = await importShared('react');

const ToastContext = createContext(null);
function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}
function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const addToast = useCallback((toast) => {
    const id = crypto.randomUUID();
    setToasts((prev) => [...prev, { ...toast, id }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 4e3);
  }, []);
  const dismissToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastContext.Provider, { value: { toasts, addToast, dismissToast }, children });
}

export { ToastProvider as T, useToast as u };
