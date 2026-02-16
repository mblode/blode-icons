import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AnimationNoneIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 4h-8v16H4" /></svg>;
const ForwardRef = forwardRef(AnimationNoneIcon);
export default ForwardRef;
