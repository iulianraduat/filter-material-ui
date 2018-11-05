# filter-material-ui

A material-ui component which allows to edit a user defined set of fields representing a filter and display it as a text or a form

---

## Props

The component accepts the props defined bellow in the table.

### Props accepted by FilterMaterialUi

| Name       | Type                                           | Required | Default   | Description                                           |
| ---------- | ---------------------------------------------- | -------- | --------- | ----------------------------------------------------- |
| id         | string                                         | no       | undefined | The id of the field                                   |
| fields     | FilterField[]                                  | yes      | -         | The fields of the filter                              |
| data       | Dictionary<string \| string[]>                 | no       | {}        | The initial values for the filter's fields            |
| onChange   | (data: Dictionary<string \| string[]>) => void | yes      | -         | The callback function called when the data is changed |
| textPrefix | string                                         | no       | ""        | The text displayed before the fields in text mode     |
| textSuffix | string                                         | no       | ""        | The text displayed after the fields in text mode      |

### Fields defined by FilterField

| Name    | Type     | Required | Default | Description                                             |
| ------- | -------- | -------- | ------- | ------------------------------------------------------- |
| label   | string   | yes      | -       | The text used as label for the field                    |
| name    | string   | yes      | -       | The name associated to the field and in the data object |
| options | string[] | no       | []      | The options used in a select                            |
| text    | TEXT     | yes      | -       | The texts displayed in the text mode                    |
| type    | TYPE     | yes      | -       | The type of the field                                   |

### Fields defined by TEXT

| Name     | Type   | Required | Description                                                   |
| -------- | ------ | -------- | ------------------------------------------------------------- |
| all      | string | yes      | The text displayed when there is no value selected            |
| plural   | string | yes      | The text displayed when there is one value selected           |
| singular | string | yes      | The text displayed when there is more then one value selected |

### Values valid for type

| Enum            | Type of the field                       |
| --------------- | --------------------------------------- |
| INPUT           | Input                                   |
| COLORS_SELECT   | Multiple Select with preview for colors |
| MULTIPLE_SELECT | Multiple Select                         |
| SINGLE_SELECT   | Single Select                           |

---

## Versions

| FilterMaterialUi _uses_ | Material-ui | React  |
| ----------------------: | :---------: | :----: |
|                   1.0.x |    3.2.0    | 16.5.2 |

### About versioning schema used for FilterMaterialUi

- Major - it will be increased if the major version of material-ui changes or there are breaking changes in the code of FilterMaterialUi
- Minor - it will be increased if no major version of the dependat package changes, but there are changes of the minor or patch versions of it
- Patch - it will be increased if there are no changes of the dependat packages, but there are non breaking changes in the code of FilterMaterialUi

---

## Example

The base component which allows to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from "react";

import FilterMaterialUi, { FilterField, TYPE } from "filter-material-ui";
import { Dictionary } from "lodash";

class App extends React.Component<any, AppState> {
  public state: AppState = {
    data: {
      name: "Green-Field",
      tags: "Open-Source",
      colors: ["red", "yellow"]
    }
  };

  public render() {
    const fields: FilterField[] = [
      {
        label: "App types",
        name: "types",
        options: ["JS", "JAVA", "C#"],
        text: {
          all: "of any type",
          singular: "having the type",
          plural: "having the types"
        },
        type: TYPE.MULTIPLE_SELECT
      },
      {
        label: "Name",
        name: "name",
        text: {
          all: "having any name",
          singular: "having names containing",
          plural: "having names containing"
        },
        type: TYPE.INPUT
      },
      {
        label: "Category",
        name: "tags",
        options: ["Open-Source", "Commercial", "Educational"],
        text: {
          all: "ignoring categories",
          singular: "having the category",
          plural: "having the categories"
        },
        type: TYPE.SINGLE_SELECT
      },
      {
        label: "Colors",
        name: "colors",
        options: ["red", "green", "blue", "white", "black", "gray", "yellow"],
        text: {
          all: "ignoring colors",
          singular: "having the color",
          plural: "having the colors"
        },
        type: TYPE.COLORS_SELECT
      }
    ];

    return (
      <div className="App">
        <h3>App</h3>
        <FilterMaterialUi
          textPrefix="Display apps "
          textSuffix="."
          data={this.state.data}
          fields={fields}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  private handleChange = (data: Dictionary<string | string[]>) => {
    console.log({
      data
    });

    this.setState({
      data
    });
  };
}

interface AppState {
  data: Dictionary<string | string[]>;
}

export default App;
```

---

## Changelog

### 1.0.0

- filter-material-ui is made publicly available
