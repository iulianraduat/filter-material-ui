import React from 'react';
import { ColorsSelect } from 'react-select-material-ui';
import { isEmpty } from 'lodash';
import { useCallback } from 'react';

function ColorsSelectField(props: ColorsSelectFieldProps) {
  const { label, name, onChange, noOptionsAvailable, noOptionsMatchFilter, options, values } = props;

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
    <ColorsSelect
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

interface ColorsSelectFieldProps {
  label: string;
  name: string;
  noOptionsAvailable?: string;
  noOptionsMatchFilter?: string;
  onChange: (field: string, value: string[]) => void;
  options: string[];
  values?: string[];
}

export default ColorsSelectField;
