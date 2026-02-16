import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextareaDragIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m15 21 6-6M7 21 21 7" /></svg>;
const ForwardRef = forwardRef(TextareaDragIcon);
export default ForwardRef;
