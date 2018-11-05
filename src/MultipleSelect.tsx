import * as React from "react";

import { MultipleSelect } from "react-select-material-ui";
import { isEmpty } from "lodash";

class MultipleSelectField extends React.Component<MultipleSelectFieldProps> {
  public render() {
    const { label, options, values } = this.props;

    if (isEmpty(values) === false) {
      (values as string[]).sort();
    }

    return (
      <MultipleSelect
        label={label}
        onChange={this.handleChange}
        options={options}
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
  onChange: (field: string, value: string[]) => void;
  options: string[];
  values?: string[];
}

export default MultipleSelectField;
