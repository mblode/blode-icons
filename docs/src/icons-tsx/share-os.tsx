import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShareOsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8 6 4-4 4 4M12 3v10M17 10c1.1046 0 2 .8954 2 2v5c0 1.6569-1.3431 3-3 3H8c-1.6569 0-3-1.3431-3-3v-5c0-1.1046.8954-2 2-2" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ShareOsIcon);
export default ForwardRef;
