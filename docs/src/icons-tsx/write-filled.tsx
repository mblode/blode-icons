import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const WriteFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3.002 4c0-.5523.4477-1 1-1h16c.5522 0 1 .4477 1 1s-.4478 1-1 1h-16c-.5523 0-1-.4477-1-1M3.002 8c0-.5523.4477-1 1-1h6.5c.5522 0 1 .4477 1 1s-.4478 1-1 1h-6.5c-.5523 0-1-.4477-1-1M4 11c-.5523 0-1 .4477-1 1s.4477 1 1 1h3.0022c.5523 0 1-.4477 1-1s-.4477-1-1-1zM19.7766 9.2253c-1.4577-1.4578-3.8213-1.4578-5.279 0L7.2949 16.428a1 1 0 0 0-.293.7071V21c0 .5522.4478 1 1 1h3.8649c.2652 0 .5196-.1054.7071-.2929l7.2027-7.2027c1.4578-1.4578 1.4578-3.8213 0-5.2791" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(WriteFilledIcon);
export default createLucideIcon('WriteFilledIcon', ForwardRef);
