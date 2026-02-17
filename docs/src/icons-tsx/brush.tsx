import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BrushIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m16.4997 15.5-8-8m6.2501 9.75 5.3358-5.3358c.781-.7811.781-2.0474-.0001-2.8284L19.4997 8.5h-2v-2L14.914 3.9142c-.7811-.781-2.0474-.781-2.8285 0L6.7497 9.2504c-.6902.6902-.6899 1.8094.0007 2.4992s.6908 1.809.0007 2.4992L4 16.9998c-.8284.8285-.8283 2.1718.0004 3.0002.8285.8282 2.1715.8281 2.9998-.0003l2.7506-2.7508c.6903-.6903 1.8095-.6901 2.4995.0005s1.8092.6909 2.4994.0006" /></svg>;
const ForwardRef = forwardRef(BrushIcon);
export default ForwardRef;
