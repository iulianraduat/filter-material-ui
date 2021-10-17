import { Grid, GridSize } from '@mui/material';
import { Dictionary, size } from 'lodash';
import React, { useCallback, useMemo, useState } from 'react';
import ApplyButton from './ApplyButton';
import CancelButton from './CancelButton';
import ColorsSelectField from './ColorsSelect';
import { FilterField, TYPE } from './FilterMaterialUi';
import InputField from './InputField';
import MultipleSelectField from './MultipleSelect';
import SingleSelectField from './SingleSelect';

const styles: Dictionary<React.CSSProperties> = {
  button: {
    margin: 10,
  },
  buttons: {
    textAlign: 'center',
  },
  container: {
    width: '100%',
  },
  grid: {
    alignItems: 'flex-end',
  },
  item: {
    padding: 10,
  },
};

function FormFilter(props: FormFilterProps) {
  const { fields, id, onCancel, onChange } = props;

  const [data, setData] = useState(props.data || {});

  const handleChange = useCallback(
    (field: string, value: string | string[]) =>
      setData((prevData) => ({
        ...prevData,
        [field]: value,
      })),
    []
  );

  const renderFieldByType = useCallback(
    (field: FilterField) => {
      const { label, name, options, text } = field;
      const { noOptionsAvailable, noOptionsMatchFilter } = text;
      const value: string | string[] | undefined = data[name];

      switch (field.type) {
        case TYPE.INPUT:
          return <InputField label={label} name={name} onChange={handleChange} value={value as string} />;
        case TYPE.COLORS_SELECT:
          return (
            <ColorsSelectField
              label={label}
              name={name}
              noOptionsAvailable={noOptionsAvailable}
              noOptionsMatchFilter={noOptionsMatchFilter}
              onChange={handleChange}
              options={options || []}
              values={value as string[]}
            />
          );
        case TYPE.MULTIPLE_SELECT:
          return (
            <MultipleSelectField
              label={label}
              name={name}
              noOptionsAvailable={noOptionsAvailable}
              noOptionsMatchFilter={noOptionsMatchFilter}
              onChange={handleChange}
              options={options || []}
              values={value as string[]}
            />
          );
        case TYPE.SINGLE_SELECT:
          return (
            <SingleSelectField
              label={label}
              name={name}
              noOptionsAvailable={noOptionsAvailable}
              noOptionsMatchFilter={noOptionsMatchFilter}
              onChange={handleChange}
              options={options || []}
              value={value as string}
            />
          );
        default:
          return <div>{field.type}</div>;
      }
    },
    [data]
  );

  const renderField = useCallback(
    (field: FilterField) => {
      const { md, sm, xs } = getColWidth(size(fields));
      return (
        <Grid
          item={true}
          key={field.name}
          md={md as GridSize}
          sm={sm as GridSize}
          style={styles.item}
          xs={xs as GridSize}
        >
          {renderFieldByType(field)}
        </Grid>
      );
    },
    [fields]
  );
  const renderedFields = useMemo(() => fields.map(renderField), [fields]);

  const handleApply = useCallback(() => onChange(data), [data]);

  return (
    <div id={id} style={styles.container}>
      <Grid container={true} style={styles.grid}>
        {renderedFields}
      </Grid>
      <div style={styles.buttons}>
        <CancelButton onCancel={onCancel} style={styles.button} />
        <ApplyButton onApply={handleApply} style={styles.button} />
      </div>
    </div>
  );
}

function getColWidth(numFields: number) {
  switch (numFields) {
    case 1:
      return {
        md: 12,
        sm: 12,
        xs: 12,
      };
    case 2:
      return {
        md: 6,
        sm: 6,
        xs: 12,
      };
    case 3:
      return {
        md: 4,
        sm: 6,
        xs: 12,
      };
    default:
      return {
        md: 3,
        sm: 6,
        xs: 12,
      };
  }
}

interface FormFilterProps {
  data?: Dictionary<string | string[]>;
  fields: FilterField[];
  id?: string;
  onCancel: () => void;
  onChange: (data: Dictionary<string | string[]>) => void;
}

export default FormFilter;
