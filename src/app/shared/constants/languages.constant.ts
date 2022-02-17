import { LanguageModel } from "../models/language.model";

export const LANGUAGES: LanguageModel[] = [
  {
    name: 'English (United States)',
    label: 'English',
    code: 'en-US',
  },
  {
    name: 'Hindi',
    label: 'हिंदी',
    code: 'hi',
  },
];

export const DEFAULT_LANGUAGE: LanguageModel = LANGUAGES[0];