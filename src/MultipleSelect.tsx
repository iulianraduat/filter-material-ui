import * as React from "react";

import { MultipleSelect } from "react-select-material-ui";
import { isEmpty } from "lodash";

class MultipleSelectField extends React.Component<MultipleSelectFieldProps> {
  public render() {
    const {
      label,
      noOptionsAvailable,
      noOptionsMatchFilter,
      options,
      values
    } = this.props;

    if (isEmpty(values) === false) {
      (values as string[]).sort();
    }

    return (
      <MultipleSelect
        label={label}
        onChange={this.handleChange}
        options={options}
        SelectProps={{
          msgNoOptionsAvailable: noOptionsAvailable,
          msgNoOptionsMatchFilter: noOptionsMatchFilter
        }}
        values={values}
      />
    );
  }

  private handleChange = (values: string[]) => {
    const { name, onChange } = this.props;
    values = values.sort();

    onChange(name, values);
  };
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
