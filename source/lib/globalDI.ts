/* eslint-disable @typescript-eslint/no-explicit-any */
import { DIContainer } from "@frank-mayer/dilight";

(globalThis as any).globalDI = new DIContainer();

export const globalDI = (): DIContainer<{ [key: string]: object }> =>
  (globalThis as any).globalDI;

export const inject = <T extends object>(service: string): T =>
  globalDI().resolve<string, T>(service);
