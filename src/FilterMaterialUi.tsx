import * as React from 'react';

import { Dictionary } from 'lodash';

import TextFilter from './TextFilter';
import FormFilter from './FormFilter';

class FilterMaterialUi extends React.PureComponent<FilterMaterialUiProps, FilterMaterialUiState> {
	public state: FilterMaterialUiState = {
		isTextVisible: true
	};

	public render() {
		const { onChange, textPrefix, textSuffix, ...rest } = this.props;
		const { isTextVisible } = this.state;

		return isTextVisible ? (
			<TextFilter {...rest} textPrefix={textPrefix} textSuffix={textSuffix} onEdit={this.handleEdit} />
		) : (
			<FormFilter {...rest} onCancel={this.handleShowText} onChange={this.handleChange} />
		);
	}

	private handleEdit = () =>
		this.setState({
			isTextVisible: false
		});

	private handleChange = (data: Dictionary<string | string[]>) => {
		this.props.onChange(data);
		this.handleShowText();
	};

	private handleShowText = () =>
		this.setState({
			isTextVisible: true
		});
}

interface FilterMaterialUiState {
	isTextVisible: boolean;
}

export interface FilterMaterialUiProps {
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

export default FilterMaterialUi;
