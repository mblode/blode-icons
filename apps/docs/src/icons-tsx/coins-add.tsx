import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CoinsAddIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 16c-3.3137 0-6-2.6863-6-6s2.6863-6 6-6c2.4597 0 4.5737 1.4801 5.5 3.5983M15 12v2m0 0v2m0-2h-2m2 0h2m4 0c0 3.3137-2.6863 6-6 6-2.6159 0-4.8409-1.6741-5.6619-4.0094A5.99 5.99 0 0 1 9 14c0-3.2002 2.5055-5.8153 5.6619-5.9906A6 6 0 0 1 15 8c3.3137 0 6 2.6863 6 6" /></svg>;
const ForwardRef = forwardRef(CoinsAddIcon);
export default createLucideIcon('CoinsAddIcon', ForwardRef);
