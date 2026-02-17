import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CelebrateIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.001 2s.1777 1.04 0 2c-.1915 1.034-1 2-1 2m2.5 2.5 1-1m1.8-2.75.45-1.25m1.25 4.5 1-.5m-3 3.5s.7561.032 1.5.27c.6705.2146 1.5.73 1.5.73m-15.22 8.814 9.3825-3.696c1.3402-.5279 1.6997-2.2565.6812-3.275l-5.6861-5.6861c-1.0184-1.0185-2.747-.659-3.275.681L3.1872 18.22c-.6409 1.6268.967 3.2348 2.5938 2.594" /></svg>;
const ForwardRef = forwardRef(CelebrateIcon);
export default ForwardRef;
