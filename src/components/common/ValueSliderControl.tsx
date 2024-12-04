import React from 'react';
import {_noop} from "../../utils";

interface Props {
    label: string | number;
    valueLabel: string | number;
    onChange?: (increment: boolean) => void;
    isReadOnly?: boolean;
}

const ValueSliderControl = ({label, valueLabel, onChange = _noop, isReadOnly = false}: Props) => {
    return (
        <div>
            <span>{label}</span>:{' '}
            {!isReadOnly && <button onClick={() => onChange(false)}>-</button>}
            <span>{valueLabel}</span>
            {!isReadOnly && <button onClick={() => onChange(true)}>-</button>}
        </div>
    );
};

export default ValueSliderControl;