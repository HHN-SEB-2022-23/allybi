import { modelContainer } from "../model";
import type { Chapter } from "../types/Chapter";
import { chapters } from "../data/chapters";

export class ChapterService {
  private _gameModel = modelContainer.resolve("GameModel");

  public getNextService(): Chapter | null {
    for (const c of chapters) {
      if (c.title != this._gameModel.currectChapter.title) {
        return c;
      }
    }

    return null;
  }
}
