import * as React from "react";

import { SingleSelect } from "react-select-material-ui";

class SingleSelectField extends React.Component<SingleSelectFieldProps> {
  public render() {
    const { label, options, value } = this.props;

    return (
      <SingleSelect
        label={label}
        onChange={this.handleChange}
        options={options}
        value={value}
      />
    );
  }

  private handleChange = (value: string) => {
    const { name, onChange } = this.props;

    onChange(name, value);
  };
}

interface SingleSelectFieldProps {
  label: string;
  name: string;
  onChange: (field: string, value: string) => void;
  options: string[];
  value?: string;
}

export default SingleSelectField;
