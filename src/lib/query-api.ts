/**
 * Laravel contact queries API (public POST /api/queries).
 * @see project API docs — Accept & Content-Type: application/json
 */

const DEFAULT_BASE = "https://360techportfolio.com/projects/laravel-app";

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

function getApiBase(): string {
  const raw = import.meta.env.VITE_LARAVEL_API_BASE_URL ?? DEFAULT_BASE;
  return raw.replace(/\/$/, "");
}

export function getQueriesEndpoint(): string {
  return `${getApiBase()}/api/queries`;
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
  const res = await fetch(getQueriesEndpoint(), {
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
