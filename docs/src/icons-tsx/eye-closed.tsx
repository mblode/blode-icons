import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EyeClosedIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12.9381c4.6451 4.939 11.3548 4.939 16 0M4 7.7043C6.3226 5.2348 9.1613 4 12 4s5.6774 1.2347 8 3.7041M12 16.75V20m-3.5-3.75L7 18.7321m8.5-2.4821 1.5 2.4821" /></svg>;
const ForwardRef = forwardRef(EyeClosedIcon);
export default createLucideIcon('EyeClosedIcon', ForwardRef);
