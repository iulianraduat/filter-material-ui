import InputMaterialUi from 'input-material-ui';
import React from 'react';
import { useCallback } from 'react';

function InputField(props: InputFieldProps) {
  const { label, name, onChange, value } = props;

  const handleChange = useCallback((value: string) => onChange(name, value), [name, onChange]);

  return <InputMaterialUi label={label} onChange={handleChange} value={value} />;
}

interface InputFieldProps {
  label: string;
  name: string;
  onChange: (field: string, value: string) => void;
  value?: string;
}

export default InputField;
