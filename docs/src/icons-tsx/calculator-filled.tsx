import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalculatorFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 2C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4V6c0-2.2091-1.7909-4-4-4zm10 5V6c0-1.1046-.8954-2-2-2H8c-1.1046 0-2 .8954-2 2v1zm-8.25 6.5c.6904 0 1.25-.5596 1.25-1.25S10.4404 11 9.75 11s-1.25.5596-1.25 1.25.5596 1.25 1.25 1.25m0 4.5c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25S9.0596 18 9.75 18m5.75-5.75c0 .6904-.5596 1.25-1.25 1.25S13 12.9404 13 12.25 13.5596 11 14.25 11s1.25.5596 1.25 1.25M14.25 18c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25.5596 1.25 1.25 1.25" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CalculatorFilledIcon);
export default ForwardRef;
