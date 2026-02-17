import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WebcamFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 8c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M12 2c-4.4183 0-8 3.5817-8 8 0 4.0796 3.0537 7.446 7 7.9381V20H7c-.5523 0-1 .4477-1 1s.4477 1 1 1h10c.5523 0 1-.4477 1-1s-.4477-1-1-1h-4v-2.0619c3.9463-.4921 7-3.8585 7-7.9381 0-4.4183-3.5817-8-8-8m-4 8c0-2.2091 1.7909-4 4-4s4 1.7909 4 4-1.7909 4-4 4-4-1.7909-4-4" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(WebcamFilledIcon);
export default ForwardRef;
