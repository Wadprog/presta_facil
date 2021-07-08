import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="sp-app"
      type="text/javascript"
      src="https://app.secureprivacy.ai/script/606acb2d5761b5f013b48067.js"
      async
    ></script>,
  ]);
};
