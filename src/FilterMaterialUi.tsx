import React from 'react';
import { Dictionary } from 'lodash';
import TextFilter from './TextFilter';
import FormFilter from './FormFilter';
import { useCallback, useState } from 'react';

function FilterMaterialUi(props: FilterMaterialUiProps) {
  const { onChange, textPrefix, textSuffix, ...rest } = props;
  const [isTextVisible, setTextVisible] = useState(true);

  const handleEdit = useCallback(() => setTextVisible(false), []);

  const handleShowText = useCallback(() => setTextVisible(true), []);

  const handleChange = useCallback((data: Dictionary<string | string[]>) => {
    handleShowText();
    onChange(data);
  }, []);

  return isTextVisible ? (
    <TextFilter {...rest} textPrefix={textPrefix} textSuffix={textSuffix} onEdit={handleEdit} />
  ) : (
    <FormFilter {...rest} onCancel={handleShowText} onChange={handleChange} />
  );
}

export interface FilterMaterialUiProps {
  data?: Dictionary<string | string[]>;
  fields: FilterField[];
  id?: string;
  onChange: (data: Dictionary<string | string[]>) => void;
  textPrefix?: string;
  textSuffix?: string;
}

export interface FilterField {
  label: string;
  name: string;
  options?: string[];
  text: {
    all: string;
    noOptionsAvailable?: string;
    noOptionsMatchFilter?: string;
    plural: string;
    singular: string;
  };
  type: TYPE;
}

export enum TYPE {
  INPUT,
  SINGLE_SELECT,
  MULTIPLE_SELECT,
  COLORS_SELECT,
}

export default FilterMaterialUi;
