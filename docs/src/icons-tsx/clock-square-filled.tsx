import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ClockSquareFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 9c.5523 0 1 .4477 1 1v1.5855l1.2072 1.2075c.3905.3906.3904 1.0237-.0002 1.4142s-1.0237.3904-1.4142-.0002l-1.5-1.5004a1 1 0 0 1-.2928-.707V10c0-.5523.4477-1 1-1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm9-.5c-3.0376 0-5.5 2.4624-5.5 5.5s2.4624 5.5 5.5 5.5 5.5-2.4624 5.5-5.5-2.4624-5.5-5.5-5.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ClockSquareFilledIcon);
export default ForwardRef;
