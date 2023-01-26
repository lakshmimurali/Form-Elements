import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import TextBox from './TextBox';
import TextArea from './TextArea';
import Radio from './Radio';
import CheckBox from './CheckBox';
import Select from './Select';
import ColorPicker from './ColorPicker';
import Range from './Range';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <TextBox />
    <br />
    <TextArea />
    <br />
    <Radio />
    <br />
    <Radio />
    <br />
    <CheckBox />
    <br />
    <Select />
    <ColorPicker />
    <Range />
  </StrictMode>
);
