import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Flag1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 2c-1.1046 0-2 .8954-2 2v17c0 .5523.4477 1 1 1s1-.4477 1-1v-5h13.1315c1.5974 0 2.5502-1.7803 1.6641-3.1094L18.2018 9l2.5938-3.8906C21.6817 3.7803 20.7289 2 19.1315 2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Flag1FilledIcon);
export default ForwardRef;
