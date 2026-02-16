import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PhoneHapticIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m3.5009 8-1.052 1.052a1.546 1.546 0 0 0-.1436 2.0205 1.546 1.546 0 0 1 0 1.855 1.546 1.546 0 0 0 .1436 2.0205L3.5009 16m17-8 1.052 1.052c.5439.544.6051 1.4051.1436 2.0205a1.546 1.546 0 0 0 0 1.855 1.546 1.546 0 0 1-.1436 2.0205L20.5009 16m-9.5-9h2m-6 0v10c0 1.6569 1.3431 3 3 3h4c1.6568 0 3-1.3431 3-3V7c0-1.6569-1.3432-3-3-3h-4c-1.6569 0-3 1.3431-3 3" /></svg>;
const ForwardRef = forwardRef(PhoneHapticIcon);
export default ForwardRef;
