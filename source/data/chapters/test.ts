import type { Chapter } from "../../types/Chapter";
import { DialogType } from "../../types/DialogType";
import { Tag } from "../../types/Tags";

export const test: Chapter = {
  title: "Test Chapter",
  player: "René",
  tags: [Tag["Diskriminierungstyp 2"]],
  headDialog: {
    dialogType: DialogType.NPCDialog,
    speaker: "Felix",
    text: "Was schmeckt beschissener als Jägermeister?",
    next: {
      dialogType: DialogType.NPCDialog,
      speaker: "Frank",
      text: "Apfelwein!",
      next: {
        dialogType: DialogType.PlayerOptionDialog,
        choices: [
          {
            dialogType: DialogType.PlayerDialog,
            text: "Hört auf zu streiten!",
            next: {
              dialogType: DialogType.NPCDialog,
              speaker: "Felix",
              text: "Ich bin der Boss hier!",
            },
          },
          {
            dialogType: DialogType.PlayerDialog,
            text: "Fight!",
            next: {
              dialogType: DialogType.NPCDialog,
              speaker: "Felix",
              text: "Deine Mutter!",
            },
          },
        ],
      },
    },
  },
};
