import React, {useState} from 'react';
import {Attribute, Attributes, Class} from "../../../types";
import {CLASS_LIST} from "../../../consts";
import {getAttributeEntries} from "../../../utils";

interface Props {
    classKey: Class
    comparison: Attributes;
}

const ClassSheet = ({classKey, comparison}: Props) => {
    const [templateClass] = useState<Attributes>(CLASS_LIST[classKey]);
    const failedRequirements: Attribute[] = getAttributeEntries(comparison)
        .filter(([attr, value]) => templateClass[attr] > value)
        .map(([attr]) => attr);

    return (
        <div style={{ border: '1px solid white' }}>
            <p style={{ color: failedRequirements.length > 0 ? 'red' : undefined}}>
                {classKey}
            </p>
        </div>
    );
};

export default ClassSheet;