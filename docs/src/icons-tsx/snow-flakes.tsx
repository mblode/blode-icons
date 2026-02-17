import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SnowFlakesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.9961 5.5v13m0-13-2.5-2.5m2.5 2.5 2.5-2.5m-2.5 15.5-2.5 2.5m2.5-2.5 2.5 2.5M6.3681 8.75l11.2584 6.5M6.3682 8.75l-3.415.915m3.415-.915-.915-3.415m12.1733 9.915.9151 3.415m-.9151-3.415 3.4151-.9151M6.3682 15.25l11.2583-6.5m-11.2583 6.5-.915 3.415m.915-3.415-3.415-.9151m14.6733-5.585 3.4151.9151m-3.4151-.915.9151-3.415" /></svg>;
const ForwardRef = forwardRef(SnowFlakesIcon);
export default ForwardRef;
