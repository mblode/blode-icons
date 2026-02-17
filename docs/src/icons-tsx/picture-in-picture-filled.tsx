import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PictureInPictureFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 8c0-1.1046.8954-2 2-2h10c1.1046 0 2 .8954 2 2v3c0 .5523.4477 1 1 1s1-.4477 1-1V8c0-2.2091-1.7909-4-4-4H6C3.7909 4 2 5.7909 2 8v6c0 2.2091 1.7909 4 4 4h3c.5523 0 1-.4477 1-1s-.4477-1-1-1H6c-1.1046 0-2-.8954-2-2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M14.5 14c-1.3807 0-2.5 1.1193-2.5 2.5v2c0 1.3807 1.1193 2.5 2.5 2.5h5c1.3807 0 2.5-1.1193 2.5-2.5v-2c0-1.3807-1.1193-2.5-2.5-2.5z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PictureInPictureFilledIcon);
export default ForwardRef;
