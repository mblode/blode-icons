import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LoadingCircleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeOpacity={0.3} strokeWidth={2} d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M20.9451 13c-.4612 4.1716-3.7735 7.4839-7.9451 7.9451" /></svg>;
const ForwardRef = forwardRef(LoadingCircleIcon);
export default createLucideIcon('LoadingCircleIcon', ForwardRef);
