import { CLIENT_DISPLAY_NAME, CLIENT_ID } from './client-config.generated'

/** White-label client id (from inject / generated config). */
export const appClientId: string =
  typeof import.meta.env.VITE_CLIENT === 'string' && import.meta.env.VITE_CLIENT.length > 0
    ? import.meta.env.VITE_CLIENT
    : CLIENT_ID

/** Human-readable product title for this client build. */
export const appClientDisplayName: string = CLIENT_DISPLAY_NAME
