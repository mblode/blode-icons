import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car5FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.595 7.3424C2.9165 5.4137 4.5852 4 6.5406 4h6.3422c1.9465 0 3.805.8105 5.1295 2.2368l3.1164 3.3562a7 7 0 0 1 1.8705 4.7631V16c0 1.1046-.8954 2-2 2h-.8367c-.5618 1.1825-1.767 2-3.1632 2s-2.6015-.8175-3.1632-2h-3.6736c-.5618 1.1825-1.767 2-3.1632 2-1.4156 0-2.6349-.8404-3.1862-2.0494-1.5743-.2887-2.6861-1.8-2.4122-3.4438zM6.9993 15c-.8285 0-1.5.6716-1.5 1.5s.6715 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5m10 0c-.8285 0-1.5.6716-1.5 1.5s.6715 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Car5FilledIcon);
export default ForwardRef;
