import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import FilterMaterialUi from '../src/FilterMaterialUi';
import Example, { Dictionary } from './Example';

const meta: Meta<typeof FilterMaterialUi> = {
  title: 'FilterMaterialUi',
  component: FilterMaterialUi,
} as Meta<typeof FilterMaterialUi>;
export default meta;
type Story = StoryObj<typeof FilterMaterialUi>;

const style: React.CSSProperties = {
  height: 20,
};

const showSelectedValue = (id: string) => (values: Dictionary) =>
  (document.getElementById(id)!.textContent = JSON.stringify(
    values,
    undefined,
    2
  ));

export const NotPreFilled = () => (
  <div>
    <Example preFilled={false} onChange={showSelectedValue('npf')} />
    <div style={style} />
    Selected values: <span id="npf" />
  </div>
);
NotPreFilled.storyName = 'not pre-filled';

export const Prefilled = () => (
  <div>
    <Example preFilled={true} onChange={showSelectedValue('pf')} />
    <div style={style} />
    Selected values: <span id="pf" />
  </div>
);
Prefilled.storyName = 'prefilled';
