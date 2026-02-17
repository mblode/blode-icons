import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SimCard2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20 6v12c0 2.2091-1.7909 4-4 4H8c-2.2091 0-4-1.7909-4-4V8.2426a4 4 0 0 1 1.1716-2.8284l2.2426-2.2426A4 4 0 0 1 10.2426 2H11v5c0 .5523.4477 1 1 1s1-.4477 1-1V2h2v5c0 .5523.4477 1 1 1s1-.4477 1-1V2.126c1.7252.444 3 2.0102 3 3.874" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SimCard2FilledIcon);
export default createLucideIcon('SimCard2FilledIcon', ForwardRef);
