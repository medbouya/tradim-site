import { runtimeConfig } from "@/lib/config";
import { MockDataProvider } from "@/lib/data/adapters/mock";
import { PayloadDataProvider } from "@/lib/data/adapters/payload";
import type { DataProvider } from "@/lib/data/provider";

function createProvider(): DataProvider {
  if (runtimeConfig.cmsProvider === "payload") {
    return new PayloadDataProvider();
  }

  return new MockDataProvider();
}

export const dataProvider = createProvider();
