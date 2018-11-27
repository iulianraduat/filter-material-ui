import * as React from 'react';

import { Dictionary } from 'lodash';

export interface FilterMaterialUiProps extends React.Props<FilterMaterialUi> {
	id?: string;
	fields: FilterField[];
	data?: Dictionary<string | string[]>;
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
	COLORS_SELECT
}

declare class FilterMaterialUi extends React.Component<FilterMaterialUiProps> {}

declare module 'filter-material-ui' {

}

export default FilterMaterialUi;
