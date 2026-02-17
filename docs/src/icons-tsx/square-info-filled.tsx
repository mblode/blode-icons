import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareInfoFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.7587 3c-.805 0-1.4693 0-2.0105.0442-.5621.046-1.0788.1445-1.5642.3918a4 4 0 0 0-1.748 1.748c-.2473.4854-.3459 1.002-.3918 1.5642C3 7.2894 3 7.9537 3 8.7587v6.4826c0 .805 0 1.4693.0442 2.0105.046.5621.1445 1.0788.3918 1.5642a4 4 0 0 0 1.748 1.748c.4854.2473 1.002.3459 1.5642.3918C7.2894 21 7.9537 21 8.7587 21h6.4826c.805 0 1.4693 0 2.0105-.0442.5621-.0459 1.0788-.1445 1.5642-.3918a4 4 0 0 0 1.748-1.748c.2473-.4854.3459-1.0021.3918-1.5642C21 16.7106 21 16.0463 21 15.2413V8.7587c0-.805 0-1.4693-.0442-2.0105-.0459-.5621-.1445-1.0788-.3918-1.5642a4 4 0 0 0-1.748-1.748c-.4854-.2473-1.0021-.3459-1.5642-.3918C16.7106 3 16.0463 3 15.2413 3zM9.5 11c0-.5523.4477-1 1-1H12c.5523 0 1 .4477 1 1v5c0 .5523-.4477 1-1 1s-1-.4477-1-1v-4h-.5c-.5523 0-1-.4477-1-1M12 7c-.5523 0-1 .4477-1 1s.4477 1 1 1 1-.4477 1-1-.4477-1-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SquareInfoFilledIcon);
export default createLucideIcon('SquareInfoFilledIcon', ForwardRef);
