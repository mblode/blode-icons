import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VideoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M3 8c0-1.6569 1.3431-3 3-3h6c1.6569 0 3 1.3431 3 3v8c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3zM15.5528 9.7236l4-2C20.2177 7.3912 21 7.8746 21 8.618v6.764c0 .7433-.7823 1.2268-1.4472.8944l-4-2A1 1 0 0 1 15 13.382v-2.764a1 1 0 0 1 .5528-.8944Z" /></svg>;
const ForwardRef = forwardRef(VideoIcon);
export default ForwardRef;
