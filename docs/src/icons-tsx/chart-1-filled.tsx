import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Chart1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 7c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4h-1.6743l.6358 2.2253c.1517.531-.1557 1.0845-.6868 1.2362s-1.0845-.1557-1.2362-.6868L14.2457 19H9.7543l-.7928 2.7747c-.1517.5311-.7052.8385-1.2362.6868s-.8385-.7052-.6868-1.2362L7.6743 19H6c-2.2091 0-4-1.7909-4-4zm7 6c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 .5523.4477 1 1 1s1-.4477 1-1zm3-6c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-.5523.4477-1 1-1m5 4c0-.5523-.4477-1-1-1s-1 .4477-1 1v3c0 .5523.4477 1 1 1s1-.4477 1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Chart1FilledIcon);
export default createLucideIcon('Chart1FilledIcon', ForwardRef);
