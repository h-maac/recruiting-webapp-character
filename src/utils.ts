import {Attribute, Attributes} from "./types";
import {ATTRIBUTE_LIST} from "./consts";

export const createBaseCharacterSheet = (): Attributes => (ATTRIBUTE_LIST.reduce((sheet, attr) => ({
    ...sheet,
    [attr]: 10
}), {}) as Attributes)

export const getAttributeEntries = (attributes: Attributes): [Attribute, number][] => (
    Object.entries(attributes) as [Attribute, number][]
); 