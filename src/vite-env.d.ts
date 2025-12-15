/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HUME_API_KEY: string
  readonly VITE_HUME_VOICE_ID?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

