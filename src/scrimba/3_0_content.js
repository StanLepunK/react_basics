import React from 'react';
import { CheckBoxV0, CheckBoxV1 } from './3_1_checkbox';
import { GaleryV0, GaleryV1 } from './3_2_galery';

export default function MainContent() {
  return (
    <React.StrictMode>
      <GaleryV1 />
      {/* <GaleryV0 /> */}

      {/* <CheckBoxV0 /> */}
      {/* <CheckBoxV1 /> */}
    </React.StrictMode>
  );
}