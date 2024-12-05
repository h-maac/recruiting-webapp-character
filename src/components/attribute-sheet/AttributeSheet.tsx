import React, {useCallback, useEffect, useState} from 'react';
import ValueSliderControl from "../common/ValueSliderControl";
import {Attributes} from "../../types";
import {createBaseCharacterSheet, getAbilityModifierFromAttr} from "../../utils";
import ClassSelector from "../class-selector/ClassSelector";
import SkillSelector from "../skill-selector/SkillSelector";
import Api from "../../service";

const AttributeSheet = () => {
    const [attributeSheet, setAttributeSheet] = useState<Attributes>(createBaseCharacterSheet());
    const updateAttribute = useCallback((attr, increment) => {
        const newValue = attributeSheet[attr] + (increment ? 1 : -1);
        setAttributeSheet({...attributeSheet, [attr]: newValue});
    }, [attributeSheet])

    useEffect(() => {
        // not expected to leave it like this. time ran out :/ Natural zero
        Api.loadData().then();
    }, []);
    
    const saveData = useCallback((attributeSheet) => {
        // not expected to leave it like this. time ran out :/ Natural zero
        Api.saveData({
            characters: [
                {attributes: attributeSheet, skills: null}
            ]
        });
    }, []);
    
    return (
        <>
            <div style={{textAlign: 'right'}}>
                <button onClick={() => saveData(attributeSheet)}>Save Sheet</button>
            </div>
            <ClassSelector comparison={attributeSheet}/>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div style={{ border: '1px solid white', flexBasis: 500, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                    <SkillSelector attributeSheet={attributeSheet}/>
                </div>
            </div>
        </>
    );
};

export default AttributeSheet;