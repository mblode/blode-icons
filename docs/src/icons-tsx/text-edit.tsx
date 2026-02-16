import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextEditIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 6h7M2 10h4M12.8787 18.1214 21 10.0001c1.1046-1.1046 1.1046-2.8955 0-4-1.1046-1.1046-2.8954-1.1046-4 0l-8.1213 8.1213A3 3 0 0 0 8 16.2427v2.7574h2.7574a3 3 0 0 0 2.1213-.8787" /></svg>;
const ForwardRef = forwardRef(TextEditIcon);
export default ForwardRef;
