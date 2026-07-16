/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Laravel app root (no trailing slash), e.g. https://example.com/projects/laravel-app */
  readonly VITE_LARAVEL_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
