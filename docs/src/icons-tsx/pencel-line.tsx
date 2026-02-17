import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PencelLineIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 21h7M19.8787 4.3787l-.2574-.2574c-1.1716-1.1715-3.071-1.1715-4.2426 0l-11.5 11.5001A3 3 0 0 0 3 17.7427V21h3.2574a3 3 0 0 0 2.1213-.8786l11.5-11.5c1.1716-1.1716 1.1716-3.0711 0-4.2427" /></svg>;
const ForwardRef = forwardRef(PencelLineIcon);
export default ForwardRef;
