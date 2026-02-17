import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChainLink3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m10 5.5.7514-.7416c2.3445-2.3445 6.1457-2.3445 8.4902 0s2.3445 6.1457 0 8.4902L18.5 14m-13-4-.7416.7514c-2.3445 2.3445-2.3445 6.1457 0 8.4902s6.1457 2.3445 8.4902 0L14 18.5M10 14l4-4" /></svg>;
const ForwardRef = forwardRef(ChainLink3Icon);
export default ForwardRef;
