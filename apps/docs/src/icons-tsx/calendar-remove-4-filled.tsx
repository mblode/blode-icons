import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarRemove4FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16 2c.5523 0 1 .4477 1 1v1c2.2091 0 4 1.7909 4 4v9c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4V3c0-.5523.4477-1 1-1s1 .4477 1 1v1h6V3c0-.5523.4477-1 1-1M9.041 9.5429c.3905-.3905 1.0236-.3905 1.4142 0l1.5447 1.5447 1.5447-1.5447c.3905-.3905 1.0236-.3905 1.4142 0s.3905 1.0237 0 1.4142l-1.5447 1.5447 1.5427 1.5428c.3905.3905.3905 1.0236 0 1.4142s-1.0237.3905-1.4142 0l-1.5427-1.5428-1.5428 1.5428c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l1.5427-1.5428-1.5447-1.5447c-.3905-.3905-.3905-1.0237 0-1.4142" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CalendarRemove4FilledIcon);
export default createLucideIcon('CalendarRemove4FilledIcon', ForwardRef);
