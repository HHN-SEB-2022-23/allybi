
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "CREDITS": "done.invoke.(machine).CREDITS:invocation[0]";
"FILTER": "done.invoke.(machine).FILTER:invocation[0]";
"GAME": "done.invoke.(machine).IN_GAME:invocation[0]";
"GAME_2": "done.invoke.(machine).IN_GAME_2:invocation[0]";
"MAIN_MENU": "done.invoke.(machine).MAIN_MENU:invocation[0]";
"OPTIONS": "done.invoke.(machine).IN_GAME_OPTIONS:invocation[0]" | "done.invoke.(machine).MAIN_MENU_OPTIONS:invocation[0]";
"QA": "done.invoke.(machine).QA:invocation[0]";
        };
        missingImplementations: {
          actions: never;
          delays: never;
          guards: never;
          services: never;
        };
        eventsCausingActions: {

        };
        eventsCausingDelays: {

        };
        eventsCausingGuards: {

        };
        eventsCausingServices: {
          "CREDITS": "CREDITS";
"FILTER": "START";
"GAME": "START";
"GAME_2": "BACK";
"MAIN_MENU": "BACK" | "xstate.init";
"OPTIONS": "OPTIONS";
"QA": "QA";
        };
        matchesStates: "CREDITS" | "FILTER" | "IN_GAME" | "IN_GAME_2" | "IN_GAME_OPTIONS" | "MAIN_MENU" | "MAIN_MENU_OPTIONS" | "QA";
        tags: never;
      }
