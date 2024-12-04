import React, {useCallback, useState} from 'react';
import ValueSliderControl from "../common/ValueSliderControl";
import {Attributes} from "../../types";
import {createBaseCharacterSheet} from "../../utils";
import ClassSelector from "../class-selector/ClassSelector";

const AttributeSheet = () => {
    const [attributeSheet, setAttributeSheet] = useState<Attributes>(createBaseCharacterSheet());
    const updateAttribute = useCallback((attr, increment) => {
        const newValue = attributeSheet[attr] + (increment ? 1 : -1);
        setAttributeSheet({...attributeSheet, [attr]: newValue});
    }, [attributeSheet])
    return (
        <>
            <ClassSelector comparison={attributeSheet} />
            {Object.entries(attributeSheet).map(([attr, value]) => (
                <ValueSliderControl
                    key={`character-attr-${attr}`}
                    label={attr}
                    valueLabel={value}
                    onChange={(increment) => updateAttribute(attr, increment)}
                />
            ))}
        </>
    );
};

export default AttributeSheet;