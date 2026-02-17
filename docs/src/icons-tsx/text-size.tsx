import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextSizeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6.9268 20v-9.001M22 5H10m2 6H2m14-6v15" /></svg>;
const ForwardRef = forwardRef(TextSizeIcon);
export default ForwardRef;
