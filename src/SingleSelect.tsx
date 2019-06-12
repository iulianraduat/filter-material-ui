import * as React from 'react';
import { SingleSelect } from 'react-select-material-ui';

class SingleSelectField extends React.PureComponent<SingleSelectFieldProps> {
  public render() {
    const { label, noOptionsAvailable, noOptionsMatchFilter, options, value } = this.props;

    return (
      <SingleSelect
        label={label}
        onChange={this.handleChange}
        options={options}
        SelectProps={{
          msgNoOptionsAvailable: noOptionsAvailable,
          msgNoOptionsMatchFilter: noOptionsMatchFilter
        }}
        defaultValue={value}
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
  noOptionsAvailable?: string;
  noOptionsMatchFilter?: string;
  onChange: (field: string, value: string) => void;
  options: string[];
  value?: string;
}

export default SingleSelectField;
