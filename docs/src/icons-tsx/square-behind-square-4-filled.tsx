import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareBehindSquare4FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 8V5.25C8 3.455 9.455 2 11.25 2h7.5C20.5449 2 22 3.455 22 5.25v7.5c0 1.7949-1.4551 3.25-3.25 3.25H16v2.75c0 1.7949-1.4551 3.25-3.25 3.25h-7.5C3.455 22 2 20.5449 2 18.75v-7.5C2 9.455 3.455 8 5.25 8zm3.25 8C9.455 16 8 14.5449 8 12.75V10H5.25C4.5596 10 4 10.5596 4 11.25v7.5c0 .6904.5596 1.25 1.25 1.25h7.5c.6904 0 1.25-.5596 1.25-1.25V16z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SquareBehindSquare4FilledIcon);
export default createLucideIcon('SquareBehindSquare4FilledIcon', ForwardRef);
