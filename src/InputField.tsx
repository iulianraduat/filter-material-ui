import * as React from "react";

import InputMaterialUi from "input-material-ui";

class InputField extends React.Component<InputFieldProps> {
  public render() {
    const { label, value } = this.props;

    return (
      <InputMaterialUi
        label={label}
        onChange={this.handleChange}
        value={value}
      />
    );
  }

  private handleChange = (value: string) => {
    const { name, onChange } = this.props;

    onChange(name, value);
  };
}

interface InputFieldProps {
  label: string;
  name: string;
  onChange: (field: string, value: string) => void;
  value?: string;
}

export default InputField;
