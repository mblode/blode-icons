import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ListSparkleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 18h3m-3-6h5M4 6h16m-3 4 1.5 3.5L22 15l-3.5 1.5L17 20l-1.5-3.5L12 15l3.5-1.5z" /></svg>;
const ForwardRef = forwardRef(ListSparkleIcon);
export default ForwardRef;
