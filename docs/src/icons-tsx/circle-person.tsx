import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CirclePersonIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10.75s1.819.25 2.9997.25S15 10.75 15 10.75M10 16c1.3821-1.3508 2-2.5 1.96-4.5h.0774C12 13.5 12.7024 14.6346 14 16m-2.1-8h.2m8.9 4c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9m-8.5-4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /></svg>;
const ForwardRef = forwardRef(CirclePersonIcon);
export default ForwardRef;
