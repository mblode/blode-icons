import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareArrowTopRightIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 6h-.2c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C4 8.2798 4 9.1198 4 10.8v4.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C6.2798 20 7.1198 20 8.8 20h4.4c1.6802 0 2.5202 0 3.162-.327a3 3 0 0 0 1.311-1.311C18 17.7202 18 16.8802 18 15.2V15M14 4h6m0 0v6m0-6-9 9" /></svg>;
const ForwardRef = forwardRef(SquareArrowTopRightIcon);
export default ForwardRef;
