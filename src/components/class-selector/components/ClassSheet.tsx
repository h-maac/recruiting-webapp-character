import React, {useState} from 'react';
import {Attribute, Attributes, Class} from "../../../types";
import {CLASS_LIST} from "../../../consts";
import {_noop, getAttributeEntries} from "../../../utils";
import ValueSliderControl from "../../common/ValueSliderControl";

interface Props {
    classKey: Class
    comparison: Attributes;
    isSelected: boolean;
    showDetail: boolean;
    onClick?: (classKey: Class) => void;
}

const ClassSheet = ({classKey, comparison, isSelected, showDetail, onClick = _noop}: Props) => {
    const [templateClass] = useState<Attributes>(CLASS_LIST[classKey]);
    const failedRequirements: Attribute[] = getAttributeEntries(comparison)
        .filter(([attr, value]) => templateClass[attr] > value)
        .map(([attr]) => attr);

    return (
        <div style={{border: '1px solid white'}}>
            {!showDetail && (
                <p
                    style={{
                        color: failedRequirements.length > 0 ? 'red' : undefined,
                        textDecoration: isSelected ? 'underline' : undefined,
                    }}
                    onClick={() => onClick(classKey)}
                >
                    {classKey}
                </p>
            )}
            {showDetail && getAttributeEntries(templateClass).map(([attr, value]) => (
                <div
                    key={`${classKey}-${attr}`}
                    style={{color: failedRequirements.includes(attr) ? 'red' : undefined}}
                >
                    <ValueSliderControl label={attr} valueLabel={value} isReadOnly={true}/>
                </div>
            ))}
        </div>
    );
};

export default ClassSheet;