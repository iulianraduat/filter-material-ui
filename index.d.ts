import React from 'react';

export interface FilterMaterialUiProps {
  id?: string;
  fields: FilterField[];
  data?: { [key: string]: string | string[] };
  onChange: (data: { [key: string]: string | string[] }) => void;
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

declare type FilterMaterialUi = React.FC<FilterMaterialUiProps>;

declare module 'filter-material-ui' {}

export default FilterMaterialUi;
