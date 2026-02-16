import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColorSwatchFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 6c0-2.2091 1.7909-4 4-4h3c1.1017 0 2.0994.4454 2.8228 1.166a2.572 2.572 0 0 1 2.0017.243l2.2232 1.2836c.9285.536 1.5608 1.3882 1.8394 2.342a2.177 2.177 0 0 1 1.4977 1.0536l1.4207 2.4607c1.1046 1.9132.449 4.3596-1.4641 5.4641l-7.8413 4.5272C10.2562 21.2584 9.0182 22 7.5 22 4.4624 22 2 19.5376 2 16.5zm11.5253 11.0616 4.8161-2.7806c.9566-.5523 1.2843-1.7755.732-2.7321L17.844 9.4195a4 4 0 0 1-.3322.7372zM13 13.9714l2.7798-4.8147c.5523-.9566.2245-2.1798-.7321-2.732l-2.1286-1.229c.053.2598.0809.5288.0809.8043zM6 16.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5S8.3284 18 7.5 18 6 17.3284 6 16.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ColorSwatchFilledIcon);
export default ForwardRef;
