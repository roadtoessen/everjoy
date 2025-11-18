import en from "../locales/en";
import vn from "../locales/vn";
import _ from "lodash";
import { store } from "../redux/store";

const getTextWithLang = (keyTexts) => {
  const lang = store.getState()?.lang?.lang;
  return _.get(lang === "VI" ? vn : en, keyTexts) || "";
};

export { getTextWithLang };
