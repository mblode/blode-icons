import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Paperclip1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14 2c-2.7614 0-5 2.2386-5 5v8c0 1.6569 1.3431 3 3 3s3-1.3431 3-3V7c0-.5523-.4477-1-1-1s-1 .4477-1 1v8c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-1.6569 1.3431-3 3-3s3 1.3431 3 3v8c0 2.7614-2.2386 5-5 5s-5-2.2386-5-5v-4c0-.5523-.4477-1-1-1s-1 .4477-1 1v4c0 3.866 3.134 7 7 7s7-3.134 7-7V7c0-2.7614-2.2386-5-5-5" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Paperclip1FilledIcon);
export default createLucideIcon('Paperclip1FilledIcon', ForwardRef);
