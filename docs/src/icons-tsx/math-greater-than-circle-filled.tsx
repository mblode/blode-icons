import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MathGreaterThanCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m7.9472-3.8944c-.494-.247-1.0946-.0468-1.3416.4472s-.0468 1.0946.4472 1.3416L13.2639 12l-4.2111 2.1056c-.494.247-.6942.8476-.4472 1.3416s.8476.6942 1.3416.4472l6-3a1 1 0 0 0 0-1.7888z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(MathGreaterThanCircleFilledIcon);
export default createLucideIcon('MathGreaterThanCircleFilledIcon', ForwardRef);
