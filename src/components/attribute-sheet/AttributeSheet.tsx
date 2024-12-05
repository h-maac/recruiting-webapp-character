import React, {useCallback, useState} from 'react';
import ValueSliderControl from "../common/ValueSliderControl";
import {Attributes} from "../../types";
import {createBaseCharacterSheet, getAbilityModifierFromAttr} from "../../utils";
import ClassSelector from "../class-selector/ClassSelector";
import SkillSelector from "../skill-selector/SkillSelector";

const AttributeSheet = () => {
    const [attributeSheet, setAttributeSheet] = useState<Attributes>(createBaseCharacterSheet());
    const updateAttribute = useCallback((attr, increment) => {
        const newValue = attributeSheet[attr] + (increment ? 1 : -1);
        setAttributeSheet({...attributeSheet, [attr]: newValue});
    }, [attributeSheet])
    return (
        <>
            <ClassSelector comparison={attributeSheet}/>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div style={{border: '1px solid white', flexBasis: 500}}>
                    {Object.entries(attributeSheet).map(([attr, value]) => (
                        <ValueSliderControl
                            key={`character-attr-${attr}`}
                            label={attr}
                            valueLabel={`${value} (${getAbilityModifierFromAttr(value)})`}
                            onChange={(increment) => updateAttribute(attr, increment)}
                        />
                    ))}
                </div>
                <div style={{border: '1px solid white', flexBasis: 500}}>
                    <SkillSelector attributeSheet={attributeSheet} />
                </div>
            </div>
        </>
    );
};

export default AttributeSheet;