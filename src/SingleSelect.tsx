import React from 'react';
import { useCallback } from 'react';
import { SingleSelect } from 'react-select-material-ui';

function SingleSelectField(props: SingleSelectFieldProps) {
  const { label, name, noOptionsAvailable, noOptionsMatchFilter, onChange, options, value } = props;

  const handleChange = useCallback((value: string | null) => onChange(name, value ?? ''), [name, onChange]);

  return (
    <SingleSelect
      label={label}
      onChange={handleChange}
      options={options}
      SelectProps={{
        isClearable: true,
        msgNoOptionsAvailable: noOptionsAvailable,
        msgNoOptionsMatchFilter: noOptionsMatchFilter,
      }}
      defaultValue={value}
    />
  );
}

interface SingleSelectFieldProps {
  label: string;
  name: string;
  noOptionsAvailable?: string;
  noOptionsMatchFilter?: string;
  onChange: (field: string, value: string) => void;
  options: string[];
  value?: string;
}

export default SingleSelectField;
