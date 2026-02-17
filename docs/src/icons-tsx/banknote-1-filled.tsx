import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Banknote1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M1 8c0-2.2091 1.7909-4 4-4h14c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4H5c-2.2091 0-4-1.7909-4-4zm3-2c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1zm8 3.5c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5 2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5m7 6.5c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c.5523 0 1-.4477 1-1s-.4477-1-1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Banknote1FilledIcon);
export default ForwardRef;
