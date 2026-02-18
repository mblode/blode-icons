import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CourtFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.7457 2.186a2.5 2.5 0 0 0-1.4914 0l-6.5 2.0313A2.5 2.5 0 0 0 3 6.6035v.8972c0 1.2095.8589 2.2184 2 2.45V17c0 .5523.4477 1 1 1s1-.4477 1-1v-6.9993h2V17c0 .5523.4477 1 1 1s1-.4477 1-1v-6.9993h2V17c0 .5523.4477 1 1 1s1-.4477 1-1v-6.9993h2V17c0 .5523.4477 1 1 1s1-.4477 1-1V9.9507c1.1411-.2316 2-1.2405 2-2.45v-.8972a2.5 2.5 0 0 0-1.7543-2.3862zM3 20c0-.5523.4477-1 1-1h16c.5523 0 1 .4477 1 1s-.4477 1-1 1H4c-.5523 0-1-.4477-1-1" /></svg>;
const ForwardRef = forwardRef(CourtFilledIcon);
export default createLucideIcon('CourtFilledIcon', ForwardRef);
