import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CircleBanSignIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M18.364 5.636C16.7353 4.0074 14.4853 3 12 3c-4.9706 0-9 4.0294-9 9 0 2.4853 1.0074 4.7353 2.636 6.364M18.364 5.636C19.9926 7.2647 21 9.5147 21 12c0 4.9706-4.0294 9-9 9-2.4853 0-4.7353-1.0074-6.364-2.636M18.364 5.636 5.636 18.364" /></svg>;
const ForwardRef = forwardRef(CircleBanSignIcon);
export default ForwardRef;
