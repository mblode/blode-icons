import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SimCard1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10 13.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M4 6c0-2.2091 1.7909-4 4-4h4.3431a5 5 0 0 1 3.5356 1.4645l2.6568 2.6568A5 5 0 0 1 20 9.657V18c0 2.2091-1.7909 4-4 4H8c-2.2091 0-4-1.7909-4-4zm6.5 5C9.1193 11 8 12.1193 8 13.5v2c0 1.3807 1.1193 2.5 2.5 2.5h3c1.3807 0 2.5-1.1193 2.5-2.5v-2c0-1.3807-1.1193-2.5-2.5-2.5z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SimCard1FilledIcon);
export default ForwardRef;
