import Example, { Dictionary } from './Example';
import React from 'react';
import { storiesOf } from '@storybook/react';

const style: React.CSSProperties = {
  height: 20
};

const showSelectedValue = (id: string) => (values: Dictionary) =>
  (document.getElementById(id).textContent = JSON.stringify(values, undefined, 2));

storiesOf('FilterMaterialUi', module)
  .addParameters({ options: { showPanel: false } })
  .add('not pre-filled', () => (
    <div>
      <Example preFilled={false} onChange={showSelectedValue('npf')} />
      <div style={style} />
      Selected values: <span id="npf" />
    </div>
  ))
  .add('prefilled', () => (
    <div>
      <Example preFilled={true} onChange={showSelectedValue('pf')} />
      <div style={style} />
      Selected values: <span id="pf" />
    </div>
  ));
