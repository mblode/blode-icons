import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BugFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16.9994 7.5348A1 1 0 0 0 17 7.5V7c0-2.7614-2.2386-5-5-5S7 4.2386 7 7v.5q0 .0174.0006.0348a4 4 0 0 0-.6253.4467l-2.811-.9308c-.5242-.1736-1.09.1107-1.2636.635s.1107 1.09.635 1.2636l2.279.7546A4 4 0 0 0 5 11v1H3c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v1c0 .4297.0387.8503.1128 1.2585l-2.2045.8017c-.519.1887-.7868.7625-.598 1.2815.1886.5191.7624.7868 1.2814.5981l2.158-.7847C6.76 20.1525 8.6996 21.6001 11 21.9291V13c0-.5523.4477-1 1-1s1 .4477 1 1v8.9291c2.3004-.329 4.24-1.7766 5.2503-3.774l2.158.7847c.519.1887 1.0928-.079 1.2815-.5981s-.079-1.0928-.5981-1.2815l-2.2045-.8017A7.04 7.04 0 0 0 19 15v-1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2v-1a4 4 0 0 0-.2314-1.344l2.2755-.7002c.5278-.1624.8241-.722.6617-1.2499s-.722-.8241-1.2499-.6617l-2.8881.8887a4 4 0 0 0-.5684-.3981M12 4c-1.6569 0-3 1.3431-3 3h6c0-1.6569-1.3431-3-3-3" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BugFilledIcon);
export default createLucideIcon('BugFilledIcon', ForwardRef);
