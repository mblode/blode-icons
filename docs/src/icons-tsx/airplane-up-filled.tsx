import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirplaneUpFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18.092 4.1783a3 3 0 0 0-1.7708.1006c-1.6093.6003-6.1284 2.284-8.061 2.984a1.007 1.007 0 0 1-.847-.075l-1.3539-.784a4 4 0 0 0-3.367-.2995l-1.0329.3741a1 1 0 0 0-.4869 1.5018l1.987 2.928-.0062.0133a3 3 0 0 0-.1078 2.284l.0745.2081c.5668 1.5832 2.3241 2.3913 3.895 1.7912l2.3317-.8908c.1198 1.2991 1.4382 2.1423 2.6726 1.6951l.6749-.2445a4 4 0 0 0 1.9212-1.4765l1.774-2.5501 3.9411-1.4278a2.957 2.957 0 0 0 1.9498-2.78c0-1.3587-.926-2.5426-2.2448-2.8698zM3 17.9996c-.5523 0-1 .4477-1 1s.4477 1 1 1h18c.5523 0 1-.4477 1-1s-.4477-1-1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AirplaneUpFilledIcon);
export default createLucideIcon('AirplaneUpFilledIcon', ForwardRef);
