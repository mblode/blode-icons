import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowDownRightFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.4393 5.4393c.5858-.5857 1.5356-.5857 2.1214 0L16 13.8787V9.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5v8c0 .8284-.6716 1.5-1.5 1.5h-8c-.8284 0-1.5-.6716-1.5-1.5S8.6716 16 9.5 16h4.3787L5.4393 7.5607c-.5857-.5858-.5857-1.5356 0-2.1214" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowDownRightFilledIcon);
export default ForwardRef;
