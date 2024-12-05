import React, {useCallback, useMemo, useState} from 'react';
import ValueSliderControl from "../common/ValueSliderControl";
import {createBaseSkillSheet, getAbilityModifierFromAttr} from "../../utils";
import {Attributes, Skills} from "../../types";
import {SkillModifierMap} from "../../consts";

const getRemainingPointsColor = (remainingPoints: number): string => {
    if (remainingPoints > 0) return 'green';
    if (remainingPoints === 0) return 'white';
    return 'red';
}

interface Props {
    attributeSheet: Attributes
}

const SkillSelector = ({attributeSheet}: Props) => {
    const [skillSheet, setSkillSheet] = useState<Skills>(createBaseSkillSheet());

    // calculate max/remaining points using attribute & skill points 
    const {maxPoints, remainingPoints} = useMemo(() => {
        const intModifier = +getAbilityModifierFromAttr(attributeSheet.Intelligence);
        const maxPoints = 10 + (intModifier * 4);
        const usedPoints = Object.values(skillSheet).reduce((sum, current) => sum + current, 0);
        const remainingPoints = maxPoints - usedPoints;
        return {maxPoints, remainingPoints};
    }, [skillSheet, attributeSheet]);

    const updateSkill = useCallback((skill, increment) => {
        if (increment && remainingPoints <= 0) {
            alert('Cannot spend any more skill points.')
            return;
        }
        const newValue = skillSheet[skill] + (increment ? 1 : -1);
        if (newValue < 0) {
            alert('Skill value cannot be lower than 0');
        }
        setSkillSheet({...skillSheet, [skill]: newValue});
    }, [skillSheet, remainingPoints]);

    return (
        <div>
            <p>
                Available Points:{' '}
                <span style={{color: getRemainingPointsColor(remainingPoints)}}>{remainingPoints}</span>{' '}
                / {maxPoints}
            </p>
            {Object.entries(skillSheet).map(([skill, value]) => {
                const modifierAttr = SkillModifierMap[skill];
                const modifierAttrValue = getAbilityModifierFromAttr(attributeSheet[modifierAttr])
                return (
                    <ValueSliderControl
                        key={`character-skill-${skill}`}
                        label={`${skill} (${modifierAttr})`}
                        valueLabel={`${value}${modifierAttrValue} => [${value}]`}
                        onChange={(increment) => updateSkill(skill, increment)}
                    />
                );
            })}
        </div>
    );
};

export default SkillSelector;