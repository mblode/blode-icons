import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PinLocationIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14.3643c-2.9634.5727-5 1.7619-5 3.1361 0 1.933 4.0294 3.5 9 3.5s9-1.567 9-3.5c0-1.3742-2.0366-2.5634-5-3.1361M12 9v8m2.1211-13.1215c1.1719 1.172 1.1719 3.0721 0 4.243-1.1719 1.1708-3.0719 1.172-4.2426 0s-1.1719-3.0721 0-4.243c1.1719-1.1708 3.0707-1.172 4.2426 0" /></svg>;
const ForwardRef = forwardRef(PinLocationIcon);
export default createLucideIcon('PinLocationIcon', ForwardRef);
