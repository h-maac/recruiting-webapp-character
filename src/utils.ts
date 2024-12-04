import {Attributes} from "./types";
import {ATTRIBUTE_LIST} from "./consts";

export const createBaseCharacterSheet = (): Attributes => (ATTRIBUTE_LIST.reduce((sheet, attr) => ({
    ...sheet,
    [attr]: 10
}), {}) as Attributes)