import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AmericanFootballIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m10.25 13.75 3.5-3.5m-.6072-7.1072A12.1 12.1 0 0 1 15 3h5c.5523 0 1 .4477 1 1v5c0 .6316-.0488 1.2519-.1428 1.8572m-7.7144-7.7144 7.7144 7.7144m-7.7144-7.7144c-5.1402.7987-9.2013 4.8598-10 10m17.7144-2.2856c-.7987 5.1402-4.8598 9.2013-10 10m0 0A12.1 12.1 0 0 1 9 21H4c-.5523 0-1-.4477-1-1v-5c0-.6316.0488-1.2519.1428-1.8572m7.7144 7.7144-7.7144-7.7144" /></svg>;
const ForwardRef = forwardRef(AmericanFootballIcon);
export default ForwardRef;
