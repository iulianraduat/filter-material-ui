import { isEmpty } from 'lodash';
import React, { useCallback } from 'react';
import { MultipleSelect } from 'react-select-material-ui';

function MultipleSelectField(props: MultipleSelectFieldProps) {
  const { label, name, noOptionsAvailable, noOptionsMatchFilter, onChange, options, values } = props;

  const handleChange = useCallback(
    (values: string[] | null) => {
      values = values ?? [];
      values = values.sort();
      onChange(name, values);
    },
    [name, onChange]
  );

  if (isEmpty(values) === false) {
    (values as string[]).sort();
  }

  return (
    <MultipleSelect
      label={label}
      onChange={handleChange}
      options={options}
      SelectProps={{
        msgNoOptionsAvailable: noOptionsAvailable,
        msgNoOptionsMatchFilter: noOptionsMatchFilter,
      }}
      defaultValues={values}
    />
  );
}

interface MultipleSelectFieldProps {
  label: string;
  name: string;
  noOptionsAvailable?: string;
  noOptionsMatchFilter?: string;
  onChange: (field: string, value: string[]) => void;
  options: string[];
  values?: string[];
}

export default MultipleSelectField;
