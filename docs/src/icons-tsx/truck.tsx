import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TruckIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M10 16h4m-5-2V7H6.6056a3 3 0 0 0-2.4962 1.3359l-.6055.9083A3 3 0 0 0 3 10.9083v3.3774C3 15.2325 3.7675 16 4.7143 16M9 9V8c0-1.6569 1.3431-3 3-3h6c1.6569 0 3 1.3431 3 3v6c0 1.1046-.8954 2-2 2m-9 .5c0 1.3807-1.1193 2.5-2.5 2.5S5 17.8807 5 16.5 6.1193 14 7.5 14s2.5 1.1193 2.5 2.5Zm9 0c0 1.3807-1.1193 2.5-2.5 2.5S14 17.8807 14 16.5s1.1193-2.5 2.5-2.5 2.5 1.1193 2.5 2.5Z" /></svg>;
const ForwardRef = forwardRef(TruckIcon);
export default ForwardRef;
