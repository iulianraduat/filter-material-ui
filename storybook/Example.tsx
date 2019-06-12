import FilterMaterialUi, { FilterField, TYPE } from '../src/FilterMaterialUi';
import React from 'react';

const fields: FilterField[] = [
  {
    label: 'Example types',
    name: 'types',
    options: ['JS', 'JAVA', 'C#'],
    text: {
      all: 'of any type',
      singular: 'having the type',
      plural: 'having the types'
    },
    type: TYPE.MULTIPLE_SELECT
  },
  {
    label: 'Name',
    name: 'name',
    text: {
      all: 'having any name',
      singular: 'having names containing',
      plural: 'having names containing'
    },
    type: TYPE.INPUT
  },
  {
    label: 'Category',
    name: 'categories',
    options: ['Open-Source', 'Commercial', 'Educational'],
    text: {
      all: 'ignoring categories',
      singular: 'having the category',
      plural: 'having the categories'
    },
    type: TYPE.SINGLE_SELECT
  },
  {
    label: 'Colors',
    name: 'colors',
    options: ['red', 'green', 'blue', 'white', 'black', 'gray', 'yellow'],
    text: {
      all: 'ignoring colors',
      singular: 'having the color',
      plural: 'having the colors'
    },
    type: TYPE.COLORS_SELECT
  }
];

class Example extends React.Component<ExampleProps, ExampleState> {
  public state: ExampleState = {
    data: {
      name: 'Green-Field',
      categories: 'Open-Source',
      colors: ['red', 'yellow']
    }
  };

  public render() {
    return (
      <FilterMaterialUi
        textPrefix="Display apps "
        textSuffix="."
        data={this.state.data}
        fields={fields}
        onChange={this.handleChange}
      />
    );
  }

  private handleChange = (data: Dictionary) => {
    this.setState({
      data
    });

    this.props.onChange(data);
  };
}

interface ExampleState {
  data: Dictionary;
}

interface ExampleProps {
  onChange: (data: Dictionary) => void;
}

export interface Dictionary {
  [key: string]: string | string[];
}

export default Example;
