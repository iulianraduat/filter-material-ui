import * as React from "react";

import { ColorsSelect } from "react-select-material-ui";
import { isEmpty } from "lodash";

class ColorsSelectField extends React.Component<ColorsSelectFieldProps> {
  public render() {
    const { label, options, values } = this.props;

    if (isEmpty(values) === false) {
      (values as string[]).sort();
    }

    return (
      <ColorsSelect
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

interface ColorsSelectFieldProps {
  label: string;
  name: string;
  onChange: (field: string, value: string[]) => void;
  options: string[];
  values?: string[];
}

export default ColorsSelectField;
