import {Attribute, Attributes, Skills} from "./types";
import {ATTRIBUTE_LIST, SKILL_LIST} from "./consts";

export const createBaseCharacterSheet = (): Attributes => (ATTRIBUTE_LIST.reduce((sheet, attr) => ({
    ...sheet,
    [attr]: 10
}), {}) as Attributes)

export const createBaseSkillSheet = (): Skills => (SKILL_LIST.reduce((sheet, {name}) => ({
    ...sheet,
    [name]: 0
}), {}) as Skills)

export const getAttributeEntries = (attributes: Attributes): [Attribute, number][] => (
    Object.entries(attributes) as [Attribute, number][]
);

export const _noop = () => {};

export const getAbilityModifierFromAttr = (attrValue: number): string => {
    const modifier = Math.floor((attrValue - 10) / 2);
    return (modifier >= 0 ? '+' : '') + modifier;
}