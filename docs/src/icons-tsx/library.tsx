import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LibraryIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v16M9 4v16m5-16 6 16" /></svg>;
const ForwardRef = forwardRef(LibraryIcon);
export default ForwardRef;
