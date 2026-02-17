import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CheckIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="lucide lucide-check" viewBox="0 0 24 24" ref={ref} {...props}><path d="M20 6 9 17l-5-5" /></svg>;
const ForwardRef = forwardRef(CheckIcon);
export default ForwardRef;
