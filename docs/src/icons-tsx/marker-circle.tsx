import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MarkerCircleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M9 14v-3.2192a1 1 0 0 1 .7575-.9702l4-1C14.3886 8.6528 15 9.1302 15 9.7808V14m-9.5 4c1.2663-1.3507 1.82-2.1313 2.2625-3.3043.1544-.4092.5353-.6957.9727-.6957h6.5296c.4374 0 .8183.2865.9727.6957.4426 1.173.9962 1.9536 2.2625 3.3043m2.5-6c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z" /></svg>;
const ForwardRef = forwardRef(MarkerCircleIcon);
export default ForwardRef;
