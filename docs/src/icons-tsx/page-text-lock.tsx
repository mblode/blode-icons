import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageTextLockIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M10 21H8c-1.6569 0-3-1.3431-3-3V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v4m0 7h-4m4 0c.5523 0 1 .4477 1 1v2c0 .5523-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1v-2c0-.5523.4477-1 1-1m4 0v-1c0-1.1046-.8954-2-2-2s-2 .8954-2 2v1M9 7h6m-6 4h3" /></svg>;
const ForwardRef = forwardRef(PageTextLockIcon);
export default ForwardRef;
