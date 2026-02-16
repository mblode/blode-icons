import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VideoTrimIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 3v2m0 0v14m0-14H6C4.3431 5 3 6.3431 3 8v8c0 1.6569 1.3431 3 3 3h9m0 0v2m4-15.8293c1.1652.4118 2 1.523 2 2.8293v8c0 1.3062-.8348 2.4175-2 2.8293M8 10v4l2.5-2z" /></svg>;
const ForwardRef = forwardRef(VideoTrimIcon);
export default ForwardRef;
