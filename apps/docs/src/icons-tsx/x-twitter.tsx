import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const XTwitterIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17.1761 4h2.7601l-6.0301 6.6715L21 19.75h-5.5544l-4.3505-5.506-4.9779 5.506H3.3554l6.4498-7.136L3 4h5.6954l3.9325 5.0327zm-.9688 14.1508h1.5295L7.8644 5.5152H6.2232z" /></svg>;
const ForwardRef = forwardRef(XTwitterIcon);
export default createLucideIcon('XTwitterIcon', ForwardRef);
