import * as React from "react";

import Button from "@material-ui/core/Button/Button";
import Grid, { GridSize } from "@material-ui/core/Grid/Grid";
import { Dictionary, map, size } from "lodash";

import { FilterField, TYPE } from "./FilterMaterialUi";
import InputField from "./InputField";
import SingleSelectField from "./SingleSelect";
import MultipleSelectField from "./MultipleSelect";
import ColorsSelectField from "./ColorsSelect";
import CancelButton from "./CancelButton";
import ApplyButton from "./ApplyButton";

const styles: Dictionary<React.CSSProperties> = {
  button: {
    margin: 10
  },
  buttons: {
    textAlign: "center"
  },
  container: {
    width: "100%"
  },
  grid: {
    alignItems: "flex-end"
    //    ,justifyContent: "center"
  },
  item: {
    padding: 10
  }
};

class FormFilter extends React.Component<FormFilterProps, FormFilterState> {
  constructor(props: FormFilterProps) {
    super(props);

    this.state = {
      data: props.data || {}
    };
  }

  public render() {
    return (
      <div style={styles.container}>
        <Grid container={true} style={styles.grid}>
          {this.renderFields()}
        </Grid>
        <div style={styles.buttons}>
          <CancelButton onCancel={this.props.onCancel} style={styles.button} />
          <ApplyButton onApply={this.handleApply} style={styles.button} />
        </div>
      </div>
    );
  }

  private renderFields = () => map(this.props.fields, this.renderField);

  private renderField = (field: FilterField) => {
    const { md, sm, xs } = this.getColWidth();

    return (
      <Grid
        item={true}
        key={field.name}
        md={md as GridSize}
        sm={sm as GridSize}
        style={styles.item}
        xs={xs as GridSize}
      >
        {this.renderFieldByType(field)}
      </Grid>
    );
  };

  private getColWidth = () => {
    const numFields: number = size(this.props.fields);

    switch (numFields) {
      case 1:
        return {
          md: 12,
          sm: 12,
          xs: 12
        };
      case 2:
        return {
          md: 6,
          sm: 6,
          xs: 12
        };
      case 3:
        return {
          md: 4,
          sm: 6,
          xs: 12
        };
      default:
        return {
          md: 3,
          sm: 6,
          xs: 12
        };
    }
  };

  private renderFieldByType = (field: FilterField) => {
    const { label, name, options } = field;
    const { data } = this.state;
    const value: string | string[] | undefined = data[name];

    switch (field.type) {
      case TYPE.INPUT:
        return (
          <InputField
            label={label}
            name={name}
            onChange={this.handleChange}
            value={value as string}
          />
        );
      case TYPE.COLORS_SELECT:
        return (
          <ColorsSelectField
            label={label}
            name={name}
            options={options || []}
            onChange={this.handleChange}
            values={value as string[]}
          />
        );
      case TYPE.MULTIPLE_SELECT:
        return (
          <MultipleSelectField
            label={label}
            name={name}
            options={options || []}
            onChange={this.handleChange}
            values={value as string[]}
          />
        );
      case TYPE.SINGLE_SELECT:
        return (
          <SingleSelectField
            label={label}
            name={name}
            options={options || []}
            onChange={this.handleChange}
            value={value as string}
          />
        );
    }
  };

  private handleChange = (field: string, value: string | string[]) => {
    this.setState({
      data: {
        ...this.state.data,
        [field]: value
      }
    });
  };

  private handleApply = () => this.props.onChange(this.state.data);
}

interface FormFilterState {
  data: Dictionary<string | string[]>;
}

interface FormFilterProps {
  id?: string;
  data?: Dictionary<string | string[]>;
  fields: FilterField[];
  onCancel: () => void;
  onChange: (data: Dictionary<string | string[]>) => void;
}

export default FormFilter;
