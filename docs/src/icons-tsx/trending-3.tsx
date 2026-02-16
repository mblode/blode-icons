import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Trending3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7h5v5m-.5-4.5L15 13c-1.1046 1.1046-2.8954 1.1046-4 0s-2.8954-1.1046-4 0l-4 4" /></svg>;
const ForwardRef = forwardRef(Trending3Icon);
export default ForwardRef;
