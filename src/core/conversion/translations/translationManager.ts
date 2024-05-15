import { TTranslations, TArrayTranslations, TTranslationPackage } from './translationTypes';
import { DefaultTranslations, DefaultArrayTranslations } from './defaultTranslations';
export class TranslationManager {
    Translations: TTranslations;
    ArrayTranslations: TArrayTranslations;

    constructor() {
        this.Translations = DefaultTranslations;
        this.ArrayTranslations = DefaultArrayTranslations;
    }

    GetAllLanguages = () => {
        return Object.keys(this.Translations.empty);
    }

    AddTranslations(newTranslations: TTranslationPackage) {
        for (const key in newTranslations.Translations) {
            if (key in this.Translations) {
                this.Translations[key as keyof TTranslations] = {
                    ...this.Translations[key as keyof TTranslations],
                    ...newTranslations.Translations[key as keyof TTranslations]
                };
            }
        }

        for (const key in newTranslations.ArrayTranslations) {
            if (key in this.ArrayTranslations) {
                this.ArrayTranslations[key as keyof TArrayTranslations] = {
                    ...this.ArrayTranslations[key as keyof TArrayTranslations],
                    ...newTranslations.ArrayTranslations[key as keyof TArrayTranslations]
                };
            }
        }
    }
}