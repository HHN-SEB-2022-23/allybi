import type { Chapter } from "../../types/Chapter";
import { DialogType } from "../../types/DialogType";
import { Tag } from "../../types/Tags";

export const test1: Chapter = {
  title: "Foo Bar Baz",
  player: "Foo",
  tags: [Tag.diskriminierungstyp1],
  headDialog: {
    dialogType: DialogType.NPCDialog,
    speaker: "Bar",
    text: "bar",
    next: {
      dialogType: DialogType.NPCDialog,
      speaker: "Baz",
      text: "Apfelwein!",
      next: {
        dialogType: DialogType.PlayerOptionDialog,
        choices: [
          {
            dialogType: DialogType.PlayerDialog,
            text: "Foobar!",
            next: {
              dialogType: DialogType.NPCDialog,
              speaker: "Bar",
              text: "barrrr!",
            },
          },
          {
            dialogType: DialogType.PlayerDialog,
            text: "FOO!",
            next: {
              dialogType: DialogType.NPCDialog,
              speaker: "Baz",
              text: "Bazzzzz!",
            },
          },
        ],
      },
    },
  },
};
