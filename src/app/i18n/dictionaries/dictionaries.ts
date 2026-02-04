import { Locale } from "@/app/shared/type/Types";

const dictionaries = {
  "en_US": () => import("../messages/en_US.json").then(m => m.default),
  "pt_BR": () => import("../messages/pt_BR.json").then(m => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]?.() ?? dictionaries["en_US"]();
}