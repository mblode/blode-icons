import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AlphaIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 6c-.6144 4.3667-2.7974 13-7 13-3.301 0-5.0295-3.5-4.9996-7C4.0304 8.5 5.8187 5 9 5c6 0 4.4057 14 8 14 1.7418 0 2-2 2-3" /></svg>;
const ForwardRef = forwardRef(AlphaIcon);
export default ForwardRef;
