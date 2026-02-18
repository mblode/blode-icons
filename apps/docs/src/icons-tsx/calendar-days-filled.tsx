import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarDaysFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7 3C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4zM5 7c0-1.1046.8954-2 2-2h10c1.1046 0 2 .8954 2 2zm4.25 5c0 .6904-.5596 1.25-1.25 1.25S6.75 12.6904 6.75 12s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25m0 4c0 .6904-.5596 1.25-1.25 1.25S6.75 16.6904 6.75 16s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25M12 13.25c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25.5596 1.25 1.25 1.25M13.25 16c0 .6904-.5596 1.25-1.25 1.25s-1.25-.5596-1.25-1.25.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25M16 13.25c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25.5596 1.25 1.25 1.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CalendarDaysFilledIcon);
export default createLucideIcon('CalendarDaysFilledIcon', ForwardRef);
