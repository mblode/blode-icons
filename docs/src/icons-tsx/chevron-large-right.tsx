import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronLargeRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m10 21 4.1906-7.5431a3 3 0 0 0 0-2.9138L10 3" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChevronLargeRightIcon);
export default ForwardRef;
