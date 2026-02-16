import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColumnWideFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 4H6C3.7909 4 2 5.7909 2 8v8c0 2.2091 1.7909 4 4 4h5zM13 20h5c2.2091 0 4-1.7909 4-4V8c0-2.2091-1.7909-4-4-4h-5z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ColumnWideFilledIcon);
export default ForwardRef;
