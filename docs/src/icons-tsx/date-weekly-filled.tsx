import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DateWeeklyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20 5.5c0 .8284-.6716 1.5-1.5 1.5S17 6.3284 17 5.5 17.6716 4 18.5 4s1.5.6716 1.5 1.5M20 12c0 .8284-.6716 1.5-1.5 1.5S17 12.8284 17 12s.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M7 12c0 .8284-.6716 1.5-1.5 1.5S4 12.8284 4 12s.6716-1.5 1.5-1.5S7 11.1716 7 12M7 18.5c0 .8284-.6716 1.5-1.5 1.5S4 19.3284 4 18.5 4.6716 17 5.5 17s1.5.6716 1.5 1.5M12 3c-1.3807 0-2.5 1.1193-2.5 2.5S10.6193 8 12 8s2.5-1.1193 2.5-2.5S13.3807 3 12 3M12 9.5c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5 2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5M12 16c-1.3807 0-2.5 1.1193-2.5 2.5S10.6193 21 12 21s2.5-1.1193 2.5-2.5S13.3807 16 12 16" /></svg>;
const ForwardRef = forwardRef(DateWeeklyFilledIcon);
export default createLucideIcon('DateWeeklyFilledIcon', ForwardRef);
