import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronGrabberHorizontalIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m8.9998 16-3.1161-3.1161c-.4882-.4882-.4882-1.2796 0-1.7678L8.9998 8m6 8 3.1161-3.1161c.4882-.4882.4882-1.2796 0-1.7678l-3.1161-3.116" /></svg>;
const ForwardRef = forwardRef(ChevronGrabberHorizontalIcon);
export default ForwardRef;
