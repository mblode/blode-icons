import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CoinRandIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.5 15.75v-7.5l5 7.5v-7.5M9.5 12H8M16 12h-1.5" /></svg>;
const ForwardRef = forwardRef(CoinRandIcon);
export default ForwardRef;
