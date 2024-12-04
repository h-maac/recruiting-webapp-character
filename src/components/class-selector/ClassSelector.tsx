import React, {useState} from 'react';
import {CLASS_LIST} from "../../consts";
import ClassSheet from "./components/ClassSheet";
import {Attributes, Class} from "../../types";

interface Props {
    comparison: Attributes;
}

const ClassSelector = ({comparison}: Props) => {
    const [expandClass, setExpandClass] = useState<Class | undefined>();
    return (
        <div>
            <div
                style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}
            >
                {Object.keys(CLASS_LIST).map((key) => (
                    <ClassSheet
                        key={`classes-${key}`}
                        classKey={key as Class}
                        comparison={comparison}
                        isSelected={expandClass == key}
                        showDetail={false}
                        onClick={(classKey) => setExpandClass(_prev => _prev !== classKey ? classKey : undefined)}
                    />
                ))}
            </div>
            {Object.keys(CLASS_LIST).filter(key => key === expandClass).map((key) => (
                <ClassSheet
                    key={`class-detail-${key}`}
                    classKey={key as Class}
                    comparison={comparison}
                    isSelected={false}
                    showDetail={true}
                />
            ))}
        </div>
    );
};

export default ClassSelector;