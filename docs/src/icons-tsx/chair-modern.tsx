import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChairModernIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m18.5 14-1.9693-8.6649C16.2203 3.9693 15.006 3 13.6053 3h-3.2106c-1.4007 0-2.615.9693-2.9254 2.3351L5.5 14M20 14c-6 1.5-10 1.5-16 0M8 15l-2 6M16 15l2 6" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChairModernIcon);
export default ForwardRef;
