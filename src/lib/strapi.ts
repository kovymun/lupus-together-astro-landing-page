// This file is responsible for making the API calls to Strapi.

interface FetchProps {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string; // e.g. "data"
  wrappedByList?: boolean; // If you want to get the first item in the list
}

/**
 * Fetches data from the Strapi API.
 * @param endpoint - API endpoint (e.g. "books")
 * @param query - Optional query parameters (e.g. { populate: '*' })
 * @param wrappedByKey - Key to unwrap the data from (e.g. "data")
 * @param wrappedByList - If true, return only the first item from the list
 * @returns The unwrapped API response
 */
export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey = "data", // Default to Strapi's response shape
  wrappedByList = false,
}: FetchProps): Promise<T> {
  // Strip leading slash if present
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  const baseUrl = import.meta.env.STRAPI_URL;
  if (!baseUrl)
    throw new Error("STRAPI_URL is not defined in your environment variables.");

  const url = new URL(`${baseUrl}/api/${endpoint}`);

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.append(key, value);
    }
  }

  const res = await fetch(url.toString());
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
  }

  let result = await res.json();

  // Handle optional wrapping
  if (wrappedByKey && result[wrappedByKey]) {
    result = result[wrappedByKey];
  }

  if (wrappedByList && Array.isArray(result)) {
    result = result[0];
  }

  return result as T;
}
