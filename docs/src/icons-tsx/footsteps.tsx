import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FootstepsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M8 15H5c-.5523 0-1 .4477-1 1v.5C4 17.8807 5.1193 19 6.5 19S9 17.8807 9 16.5V16c0-.5523-.4477-1-1-1ZM19 17h-3c-.5523 0-1 .4477-1 1v.5c0 1.3807 1.1193 2.5 2.5 2.5s2.5-1.1193 2.5-2.5V18c0-.5523-.4477-1-1-1ZM8.5192 12H4.4809c-.349 0-.6785-.1788-.8235-.4962C2.3309 8.6007 2.8834 3 6.4999 3s4.1694 5.6007 2.8428 8.5038c-.145.3174-.4746.4962-.8235.4962ZM19.5192 14h-4.0383c-.349 0-.6785-.1788-.8235-.4962C13.3309 10.6007 13.8835 5 17.4999 5s4.1694 5.6007 2.8428 8.5038c-.145.3174-.4745.4962-.8235.4962Z" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FootstepsIcon);
export default createLucideIcon('FootstepsIcon', ForwardRef);
