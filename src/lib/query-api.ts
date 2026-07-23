/**
 * Contact / enquiry API.
 * Prefer BigRock PHP endpoint (VITE_CONTACT_API_URL), else Laravel base + /api/queries.
 */

const DEFAULT_LARAVEL_BASE = "https://360techportfolio.com/projects/laravel-app";

export type ContactQueryPayload = {
  name: string;
  email: string;
  phone_number: string;
  service: string;
  description: string;
};

export type SubmitQuerySuccess = {
  message: string;
  query?: Record<string, unknown>;
};

type LaravelValidationBody = {
  message?: string;
  errors?: Record<string, string[]>;
};

function getContactEndpoint(): string {
  const direct = import.meta.env.VITE_CONTACT_API_URL?.trim();
  if (direct) return direct.replace(/\/$/, "");

  const raw = import.meta.env.VITE_LARAVEL_API_BASE_URL ?? DEFAULT_LARAVEL_BASE;
  return `${raw.replace(/\/$/, "")}/api/queries`;
}

export function getQueriesEndpoint(): string {
  return getContactEndpoint();
}

export function parseLaravelValidationErrors(data: unknown): Record<string, string> {
  if (!data || typeof data !== "object") return {};
  const body = data as LaravelValidationBody;
  if (!body.errors || typeof body.errors !== "object") return {};
  const out: Record<string, string> = {};
  for (const [key, messages] of Object.entries(body.errors)) {
    if (Array.isArray(messages) && messages[0]) out[key] = messages[0];
  }
  return out;
}

export async function submitContactQuery(payload: ContactQueryPayload): Promise<SubmitQuerySuccess> {
  const res = await fetch(getContactEndpoint(), {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data: unknown = {};
  try {
    data = await res.json();
  } catch {
    /* non-JSON body */
  }

  if (!res.ok) {
    const err = new Error(
      typeof data === "object" && data !== null && "message" in data && typeof (data as { message: unknown }).message === "string"
        ? (data as { message: string }).message
        : `Request failed (${res.status})`,
    ) as Error & { status: number; body: unknown };
    err.status = res.status;
    err.body = data;
    throw err;
  }

  return data as SubmitQuerySuccess;
}
