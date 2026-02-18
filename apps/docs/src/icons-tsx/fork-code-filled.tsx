import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ForkCodeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 3C4.3431 3 3 4.3431 3 6c0 1.3062.8348 2.4175 2 2.8293V9c0 2.2091 1.7909 4 4 4 1.1046 0 2 .8954 2 2v.1707C9.8348 15.5825 9 16.6938 9 18c0 1.6569 1.3431 3 3 3s3-1.3431 3-3c0-1.3062-.8348-2.4175-2-2.8293V15c0-1.1046.8954-2 2-2 2.2091 0 4-1.7909 4-4v-.1707c1.1652-.4118 2-1.523 2-2.8293 0-1.6569-1.3431-3-3-3s-3 1.3431-3 3c0 1.3062.8348 2.4175 2 2.8293V9c0 1.1046-.8954 2-2 2-1.1947 0-2.2671.5238-3 1.3542C11.2671 11.5238 10.1947 11 9 11c-1.1046 0-2-.8954-2-2v-.1707C8.1652 8.4175 9 7.3063 9 6c0-1.6569-1.3431-3-3-3" /></svg>;
const ForwardRef = forwardRef(ForkCodeFilledIcon);
export default createLucideIcon('ForkCodeFilledIcon', ForwardRef);
