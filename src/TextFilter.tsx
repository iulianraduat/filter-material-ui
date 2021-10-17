import { Dictionary, isArray, isEmpty, join, size } from 'lodash';
import React, { useCallback, useMemo } from 'react';
import { FilterField } from './FilterMaterialUi';

const styles: Dictionary<React.CSSProperties> = {
  container: {
    textAlign: 'center',
    width: '100%',
  },
  icon: {
    fill: '#3f51b5',
    height: '1em',
    width: '1em',
  },
  iconContainer: {
    backgroundColor: 'aqua',
    borderRadius: '100%',
    cursor: 'pointer',
    display: 'inline-flex',
    padding: '1ch',
    marginLeft: 5,
  },
  text: {
    lineHeight: '2em',
  },
};

function TextFilter(props: TextFilterProps) {
  const { data, fields, id, onEdit, textPrefix, textSuffix } = props;

  const getValue = useCallback(
    (label: string): string | string[] | undefined => {
      if (isEmpty(data)) {
        return '';
      }

      return (data as Dictionary<string | string[]>)[label];
    },
    [data]
  );

  const renderField = useCallback(
    (field: FilterField, index: number) => {
      const and: string = renderAnd(index !== 0);
      const name: string = field.name;
      const value: string | string[] | undefined = getValue(name);
      const descr: string = getItems(field, value);
      return ` ${and}${descr}`;
    },
    [getValue]
  );

  const fieldsText: string[] = useMemo(() => fields.map(renderField), [fields, renderField]);
  const text: string = useMemo(() => `${textPrefix}${fieldsText}${textSuffix}`, [fieldsText, textPrefix, textSuffix]);

  return (
    <div id={id} style={styles.container}>
      <div>
        <span style={styles.text}>{text}</span>
        <div style={styles.iconContainer} onClick={onEdit}>
          <svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20">
            <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function renderAnd(yes: boolean) {
  return yes ? 'and ' : '';
}

function getItems(field: FilterField, value?: string | string[]): string {
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

interface TextFilterProps {
  data?: Dictionary<string | string[]>;
  fields: FilterField[];
  id?: string;
  onEdit: () => void;
  textPrefix?: string;
  textSuffix?: string;
}

export default TextFilter;
