import * as OpenAPI from "openapi-typescript-codegen";

const response = await fetch("https://api.supabase.com/api/v1-json");

if (!response.ok) {
  throw new Error("Failed to fetch data from the API");
}

const input = (await response.json()) as Record<string, unknown>;

OpenAPI.generate({
  input: input,
  output: "src/",
  useOptions: true,
  useUnionTypes: true,
  clientName: "SupabaseManager",
});
