import { en } from './locals/en';

export enum IDS {}

export type LocalesDictionary = { [index in keyof typeof IDS]: string };

interface IValuesDictionary {
  [index: string]: string;
}
type L10nDictionary = { [index in keyof typeof IDS]: any };

const currentLanguage = en;

export const L10n = new Proxy(currentLanguage, {
  get: (lang, prop: IDS) => {
    if (!(prop in lang)) {
      return () => prop;
    }

    return (values?: IValuesDictionary) => {
      let text = lang[prop];

      if (values !== undefined) {
        Object.keys(values).forEach(name => {
          text = text.replace(new RegExp('%' + name, 'gm'), values[name]);
        });
      }

      return text;
    };
  },
}) as L10nDictionary;
