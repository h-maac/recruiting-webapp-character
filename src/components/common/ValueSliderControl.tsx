import React from 'react';

interface Props {
    label: string | number;
    valueLabel: string | number;
    onChange: (increment: boolean) => void;

}

const ValueSliderControl = ({label, valueLabel, onChange}: Props) => {
    return (
        <div>
            <span>{label}</span>
            <button onClick={() => onChange(false)}>-</button>
            <span>{valueLabel}</span>
            <button onClick={() => onChange(true)}>-</button>
        </div>
    );
};

export default ValueSliderControl;