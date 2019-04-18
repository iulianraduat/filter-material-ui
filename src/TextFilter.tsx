import * as React from 'react';
import {
	Dictionary,
	isArray,
	isEmpty,
	join,
	map,
	size
	} from 'lodash';
import { FilterField } from './FilterMaterialUi';

const styles: Dictionary<React.CSSProperties> = {
  container: {
    textAlign: "center",
    width: "100%"
  },
  icon: {
    fill: "#3f51b5",
    height: "1em",
    width: "1em"
  },
  iconContainer: {
    backgroundColor: "aqua",
    borderRadius: "100%",
    cursor: "pointer",
    display: "inline-flex",
    padding: "1ch",
    marginLeft: 5
  },
  text: {
    lineHeight: "2em"
  }
};

class TextFilter extends React.PureComponent<TextFilterProps> {
  public render() {
    const { textPrefix, textSuffix } = this.props;
    const fieldsText: string[] = this.renderFields();
    const text: string = `${textPrefix}${fieldsText}${textSuffix}`;

    return (
      <div style={styles.container}>
        <div>
          <span style={styles.text}>{text}</span>
          <div style={styles.iconContainer} onClick={this.props.onEdit}>
            <svg
              style={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 20"
            >
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          </div>
        </div>
      </div>
    );
  }

  private renderFields = () => map(this.props.fields, this.renderField);

  private renderField = (field: FilterField, index: number) => {
    const and: string = this.renderAnd(index !== 0);
    const name: string = field.name;
    const value: string | string[] | undefined = this.getValue(name);
    const descr: string = this.getItems(field, value);

    return ` ${and}${descr}`;
  };

  private renderAnd = (yes: boolean) => (yes ? "and " : "");

  private getValue(label: string): string | string[] | undefined {
    const { data } = this.props;

    if (isEmpty(data)) {
      return "";
    }

    return (data as Dictionary<string | string[]>)[label];
  }

  private getItems(field: FilterField, value?: string | string[]): string {
    if (isEmpty(value)) {
      return field.text.all;
    }

    if (isArray(value) === false) {
      return `${field.text.singular} '${value as string}'`;
    }

    if (size(value) === 1) {
      return `${field.text.singular} '${(value as string[])[0]}'`;
    }

    const values: string = join(value, "', '");
    return `${field.text.plural} '${values}'`;
  }
}

interface TextFilterProps {
  id?: string;
  data?: Dictionary<string | string[]>;
  fields: FilterField[];
  onEdit: () => void;
  textPrefix?: string;
  textSuffix?: string;
}

export default TextFilter;
