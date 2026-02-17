import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UnarchivFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.7809 2.3753c.345.4313.2751 1.0606-.1562 1.4056L6.8507 6h10.2985l-2.7739-2.219c-.4313-.3451-.5012-.9744-.1562-1.4057s.9743-.5011 1.4056-.1561l5 4A1 1 0 0 1 21 7v10c0 2.2092-1.7909 4-4 4H7c-2.2091 0-4-1.7908-4-4V7a1 1 0 0 1 .3753-.7808l5-4c.4313-.345 1.0606-.2751 1.4056.1561M9 11c0-.5522.4477-1 1-1h4c.5523 0 1 .4478 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(UnarchivFilledIcon);
export default ForwardRef;
