import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarRepeatIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13 15v-2.2929c0-.4455.5386-.6686.8536-.3536l2.7928 2.7929c.315.315.0919.8536-.3535.8536H14c-.5523 0-1-.4478-1-1M21 19v2.2928c0 .4455-.5386.6686-.8536.3536l-2.7928-2.7929c-.315-.315-.0919-.8535.3535-.8535H20c.5523 0 1 .4477 1 1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20H7c-1.6569 0-3-1.3431-3-3V9m0 0V8c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v1zm4-4V3m8 2V3m3.4221 16.7188A3.693 3.693 0 0 1 17 20.625c-1.6552 0-3.0512-1.1093-3.4853-2.625m.8578-3.5257A3.693 3.693 0 0 1 17 13.375c1.6552 0 3.0512 1.1093 3.4853 2.625" /></svg>;
const ForwardRef = forwardRef(CalendarRepeatIcon);
export default createLucideIcon('CalendarRepeatIcon', ForwardRef);
