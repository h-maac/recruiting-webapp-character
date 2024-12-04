import React, {useCallback, useState} from 'react';
import ValueSliderControl from "../common/ValueSliderControl";
import {Attributes} from "../../types";
import {createBaseCharacterSheet} from "../../utils";

const AttributeSheet = () => {
    const [attributeSheet, setAttributeSheet] = useState<Attributes>(createBaseCharacterSheet());
    const updateAttribute = useCallback((attr, increment) => {
        const newValue = attributeSheet[attr] + (increment ? 1 : -1);
        setAttributeSheet({...attributeSheet, [attr]: newValue});
    }, [attributeSheet])
    return (
        <>
            {Object.entries(attributeSheet).map(([attr, value]) => (
                <ValueSliderControl
                    label={attr}
                    valueLabel={value}
                    onChange={(increment) => updateAttribute(attr, increment)}
                />
            ))}
        </>
    );
};

export default AttributeSheet;