# Supabase Manager API Client

A Javascript/Typescript client for Supabase Management API generated from the [OpenAPI Spec](https://api.supabase.com/api/v1-json). See the [Supabase Management API documentation](https://supabase.com/docs/reference/api/introduction) for more information.

## Usage

```bash
bun add @0xbigboss/supabase-manager
```

Example usage below. Be sure to set `TOKEN` and `BASE` on your **`SupabaseManager`** instance.

```ts
import { SupabaseManager } from "@0xbigboss/supabase-manager";

const TOKEN = process.env.SUPABASE_ACCESS_TOKEN;

if (!TOKEN) {
  throw new Error("SUPABASE_ACCESS_TOKEN is not defined");
}

const supabase = new SupabaseManager({
  TOKEN,
  BASE: "https://api.supabase.com/",
});


const projects = await supabase.projects.getProjects();

console.log(projects);
```

## Contributing

To install dependencies and re-generate the source files:

```bash
bun install
bun run postinstall
```

## Release a new version

```bash
bunx changeset
bunx version
bunx publish
# commit the results
```

This project was created using `bun init` in bun v1.0.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
