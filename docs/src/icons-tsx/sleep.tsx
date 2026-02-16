import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SleepIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 9h4l-4 6h4M12 3h3.5L12 8h3.5M13 13h6l-6 8h6" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SleepIcon);
export default ForwardRef;
