import React from 'react';
import {CLASS_LIST} from "../../consts";
import ClassSheet from "./components/ClassSheet";
import {Attributes, Class} from "../../types";

interface Props {
    comparison: Attributes;
}

const ClassSelector = ({comparison}: Props) => {
    return (
        <div>
            {Object.keys(CLASS_LIST).map((key) => (
                <ClassSheet
                    key={`classes-${key}`}
                    classKey={key as Class}
                    comparison={comparison}
                />
            ))}
        </div>
    );
};

export default ClassSelector;