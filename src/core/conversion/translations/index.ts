import { TranslationManager } from './translationManager';
import { TTranslations, TArrayTranslations, TTranslationPackage } from './translationTypes';

export { TTranslationPackage } from './translationTypes';

const Manager = new TranslationManager();

// End points for other modules
export const Translations: TTranslations = Manager.Translations;
export const ArrayTranslations: TArrayTranslations = Manager.ArrayTranslations;
export const GetAllLanguages = Manager.GetAllLanguages;

// End point for adding new translations outside of this module
export function AddTranslations(newTranslations: TTranslationPackage) {
    Manager.AddTranslations(newTranslations);
}