import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ToggleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><rect width={21} height={14} x={1.5} y={5} stroke="currentColor" strokeWidth={2} rx={7} /><circle cx={8.5} cy={12} r={3} fill="currentColor" /></svg>;
const ForwardRef = forwardRef(ToggleIcon);
export default ForwardRef;
