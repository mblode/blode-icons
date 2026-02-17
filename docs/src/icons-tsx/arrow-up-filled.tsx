import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowUpFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 3c.3978 0 .7793.158 1.0606.4393l5.5001 5.5c.5857.5858.5857 1.5356 0 2.1214s-1.5356.5857-2.1214 0L13.5 8.1213V19.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5V8.1213l-2.9393 2.9394c-.5858.5857-1.5356.5857-2.1214 0s-.5857-1.5356 0-2.1214l5.5-5.5A1.5 1.5 0 0 1 12 3" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowUpFilledIcon);
export default ForwardRef;
