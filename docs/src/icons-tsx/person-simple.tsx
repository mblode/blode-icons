import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PersonSimpleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={8} r={4} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M20 21c0-4.4183-3.5817-8-8-8s-8 3.5817-8 8" /></svg>;
const ForwardRef = forwardRef(PersonSimpleIcon);
export default ForwardRef;
