import { DIContainer } from "@frank-mayer/dilight";
import { ChapterService } from "./ChapterService";

export const serviceContainer = new DIContainer().addTransient(
  ChapterService,
  "ChapterService"
);
