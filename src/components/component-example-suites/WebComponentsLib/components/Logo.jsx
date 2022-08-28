import React, { memo } from 'react';
import { Logo } from '@ant478/web-components';
import Highlight from 'src/components/Highlight';
import { getUniqId } from 'src/helpers/dom';

if (!customElements.get('ant478-logo')) {
  customElements.define('ant478-logo', Logo);
}

const id4 = getUniqId('logo', 4);
const id5 = getUniqId('logo', 4);
const id6 = getUniqId('logo', 4);

const html = `
<div>
  Default:
  <ant478-logo></ant478-logo>
</div>

<div>
  Original theme:
  <ant478-logo wc-theme="original"></ant478-logo>
</div>

<div>
  Css variables configured 1:
  <style>
    #${id4}::part(root) {
      --wc-background-color: #203e8c;
      --wc-head-fill-color: #ffffff;
      --wc-gear-fill-color: #ffffff;
      --wc-wrench-fill-color: #bbbbbb;
      --wc-hammer-fill-color: #bbbbbb;
      --wc-number-fill-color: #ffb700;
      --wc-gear-spin-duration: 5s;
    }
  </style>
  <ant478-logo id="${id4}"></ant478-logo>
</div>

<div>
  Css variables configured 2:
  <style>
    #${id5}::part(root) {
      --wc-fill-color: yellow;
      --wc-background-color: #2c2c2c;
      --wc-gear-spin-duration: 10s;
    }
  </style>
  <ant478-logo id="${id5}"></ant478-logo>
</div>

<div>
  Attributes configured:
  <ant478-logo
    wc-background-color="#870000"
    wc-head-fill-color="#ffb700"
    wc-gear-fill-color="#9b6f00"
    wc-wrench-fill-color="#9b6f00"
    wc-hammer-fill-color="#9b6f00"
    wc-number-fill-color="#c51600"
    wc-gear-spin-duration="30s"
  ></ant478-logo>
</div>

<div>
  Custom styles:
  <style>
    #${id6} {
      overflow: hidden;
    }
    #${id6}::part(logo) {
      color: #1c1c1c;
      background-image: linear-gradient(
        90deg,
        rgba(131,58,180,1) 0%,
        rgba(253,29,29,1) 50%,
        rgba(252,176,69,1) 100%
      );
      animation: spin 18s linear infinite;
      border: .4em solid #1c1c1c;
    }
    #${id6}::part(logo_head),
    #${id6}::part(logo_gear),
    #${id6}::part(logo_wrench),
    #${id6}::part(logo_hammer),
    #${id6}::part(logo_number) {
      animation: 18s infinite linear;
      transform-origin: center;
    }
    #${id6}::part(logo_head) {
      animation-name: spin3d-3;
      animation-direction: reverse;
    }
    #${id6}::part(logo_gear) {
      animation-name: spin3d-2;
    }
    #${id6}::part(logo_wrench) {
      animation-name: spin3d-4;
    }
    #${id6}::part(logo_hammer) {
      animation-name: spin3d-4;
      animation-direction: reverse;
    }
    #${id6}::part(logo_number__1) {
      animation-name: spin3d-2;
    }
    #${id6}::part(logo_number__2) {
      animation-name: spin3d-5;
      animation-direction: reverse;
    }
    #${id6}::part(logo_number__3) {
      animation-name: spin3d-4;
    }
  </style>
  <ant478-logo
    id="${id6}"
    wc-custom-styles="
      @keyframes spin3d-2 {
        0% { transform: rotate3d(1, 1, 1, 0) rotate(0deg); }
        100% { transform: rotate3d(1, 1, 1, 720deg) rotate(360deg); }
      }
      @keyframes spin3d-3 {
        0% { transform: rotate3d(1, 1, 1, 0) rotate(0deg); }
        100% { transform: rotate3d(1, 1, 1, 1080deg) rotate(360deg); }
      }
      @keyframes spin3d-4 {
        0% { transform: rotate3d(1, 1, 1, 0) rotate(0deg); }
        100% { transform: rotate3d(1, 1, 1, 1440deg) rotate(360deg); }
      }
      @keyframes spin3d-5 {
        0% { transform: rotate3d(1, 1, 1, 0) rotate(0deg); }
        100% { transform: rotate3d(1, 1, 1, 1800deg) rotate(360deg); }
      }
    "
  ></ant478-logo>
</div>
`.slice(1);

const LogoComponent = memo(() => (
  <div className="web-components-lib-example logo">
    <div
      className="web-components-lib-example_demo"
      /* eslint-disable-next-line react/no-danger */
      dangerouslySetInnerHTML={{ __html: html }}
    />
    <Highlight>
      {html}
    </Highlight>
  </div>
));

export default LogoComponent;
