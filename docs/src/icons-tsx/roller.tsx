import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RollerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={5.5} cy={16.5} r={2.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><circle cx={18.5} cy={16.5} r={2.5} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m18.25 13.75-1.2677-6.3383C16.7019 6.0093 15.4706 5 14.0406 5H14M8.5 16.5h7" /></svg>;
const ForwardRef = forwardRef(RollerIcon);
export default ForwardRef;
