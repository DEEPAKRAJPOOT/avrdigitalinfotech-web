/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Full URL to BigRock PHP enquiry endpoint, e.g.
   * https://avrdigitalinfotech.com/api/submit-enquiry.php
   */
  readonly VITE_CONTACT_API_URL?: string;
  /** Laravel app root (no trailing slash) — used only if VITE_CONTACT_API_URL is unset */
  readonly VITE_LARAVEL_API_BASE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
