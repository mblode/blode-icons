import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LiveNoSignalIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.4645 8.4644C7.5596 9.3692 7 10.6192 7 11.9999s.5596 2.6307 1.4645 3.5355m7.071 0C16.4404 14.6306 17 13.3806 17 11.9999s-.5596-2.6307-1.4645-3.5355" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m10.5859 13.4141 2.8285-2.8285M10.5859 10.5859l2.8285 2.8285" /></svg>;
const ForwardRef = forwardRef(LiveNoSignalIcon);
export default ForwardRef;
