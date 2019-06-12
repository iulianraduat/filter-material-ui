import Example, { Dictionary } from './Example';
import React from 'react';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 20
};

const showSelectedValue = (id: string) => (values: Dictionary) =>
  (document.getElementById(id).textContent = JSON.stringify(values, undefined, 2));

storiesOf('FilterMaterialUi', module).add('an example', () => (
  <div>
    <Example onChange={showSelectedValue('f')} />
    <div style={style} />
    Selected values: <span id="f" />
  </div>
));
