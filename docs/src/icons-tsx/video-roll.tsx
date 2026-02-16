import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VideoRollIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M11.85 8h.3m-4.3 4h.3m7.7 0h.3m-4.3 4h.3M21 21h-8m-.25-13a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4 4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm8 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm-4 4a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z" /></svg>;
const ForwardRef = forwardRef(VideoRollIcon);
export default ForwardRef;
