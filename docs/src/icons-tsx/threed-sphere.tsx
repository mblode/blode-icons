import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThreedSphereIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M3.045 12.301C3.4978 13.8165 7.3343 15 12.0001 15c4.6398 0 8.4596-1.1703 8.9474-2.6737" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M11.4065 20.8239C10.0339 19.9975 9 16.361 9 12c0-4.5925 1.1466-8.3815 2.6278-8.9314" /></svg>;
const ForwardRef = forwardRef(ThreedSphereIcon);
export default ForwardRef;
