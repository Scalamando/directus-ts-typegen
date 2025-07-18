import { test, expect } from "vitest";
import { generateTypes } from "../src";

test("generates collection types", async () => {
  const schema = await import("./snapshots/basic.input.json");
  await expect(generateTypes(schema)).toMatchFileSnapshot("./snapshots/basic.output.ts");
});

test("generates singleton collection types", async () => {
  const schema = await import("./snapshots/singleton.input.json");
  await expect(generateTypes(schema)).toMatchFileSnapshot("./snapshots/singleton.output.ts");
});

test("generates m2o/o2m collection types", async () => {
  const schema = await import("./snapshots/m2o_o2m.input.json");
  await expect(generateTypes(schema)).toMatchFileSnapshot("./snapshots/m2o_o2m.output.ts");
});

test("generates m2m collection types", async () => {
  const schema = await import("./snapshots/m2m.input.json");
  await expect(generateTypes(schema)).toMatchFileSnapshot("./snapshots/m2m.output.ts");
});

test("generates m2a collection types", async () => {
  const schema = await import("./snapshots/m2a.input.json");
  await expect(generateTypes(schema)).toMatchFileSnapshot("./snapshots/m2a.output.ts");
});
