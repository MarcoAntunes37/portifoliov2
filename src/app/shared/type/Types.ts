import { getDictionary } from "@/app/i18n/dictionaries/dictionaries";
import { WINDOW_TYPES } from "../contants/Constants";
import { ReactNode } from "react";

type ContentMap = {
  [key: string]: ReactNode
}
type Viewport = {
  width: number;
  height: number;
};

type Locale = "pt_BR" | "en_US";

type WindowType = typeof WINDOW_TYPES[number];

type WindowVisualState = "opening" | "open" | "closing" | "closed";

type I18nDictionary = Awaited<ReturnType<typeof getDictionary>>;

export type { ContentMap, Viewport, WindowType, WindowVisualState, I18nDictionary, Locale };