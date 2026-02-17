import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MathNotesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m-8-8h16M4 19c8 0 8-14 16-14M5.5 5.5 7 7m0 0 1.5-1.5M7 7v2M15.75 15.75l3 3m0-3-3 3" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MathNotesIcon);
export default ForwardRef;
