import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirpodsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 13a4.978 4.978 0 0 1-3.0664-1.0504C2.2494 11.4177 2 10.5319 2 9.6653V6.3347c0-.8666.2494-1.7524.9336-2.2843A4.98 4.98 0 0 1 6 3c2.7614 0 5 2.2386 5 5v11c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-6.1a5.02 5.02 0 0 1-1 .1M18 13a4.978 4.978 0 0 0 3.0664-1.0504c.6842-.5319.9336-1.4177.9336-2.2843V6.3347c0-.8666-.2494-1.7524-.9336-2.2843A4.98 4.98 0 0 0 18 3c-2.7614 0-5 2.2386-5 5v11c0 1.1046.8954 2 2 2s2-.8954 2-2v-6.1c.3231.0656.6575.1 1 .1" /></svg>;
const ForwardRef = forwardRef(AirpodsFilledIcon);
export default createLucideIcon('AirpodsFilledIcon', ForwardRef);
