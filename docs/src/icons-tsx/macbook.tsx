import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MacbookIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M4 6.5C4 5.1193 5.1178 4 6.4985 4h11.0016C18.8808 4 20 5.1193 20 6.5V15c0 .5523-.4477 1-1 1H5c-.5523 0-1-.4477-1-1zM2 16h20v1.5c0 1.3807-1.1193 2.5-2.5 2.5h-15C3.1193 20 2 18.8807 2 17.5z" /></svg>;
const ForwardRef = forwardRef(MacbookIcon);
export default ForwardRef;
