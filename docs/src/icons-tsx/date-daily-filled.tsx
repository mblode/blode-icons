import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DateDailyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 3c-1.3807 0-2.5 1.1193-2.5 2.5S10.6193 8 12 8s2.5-1.1193 2.5-2.5S13.3807 3 12 3M12 9.5c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5 2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5M18.5 3C17.1193 3 16 4.1193 16 5.5S17.1193 8 18.5 8 21 6.8807 21 5.5 19.8807 3 18.5 3M18.5 9.5c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5S21 13.3807 21 12s-1.1193-2.5-2.5-2.5M12 16c-1.3807 0-2.5 1.1193-2.5 2.5S10.6193 21 12 21s2.5-1.1193 2.5-2.5S13.3807 16 12 16M5.5 9.5C4.1193 9.5 3 10.6193 3 12s1.1193 2.5 2.5 2.5S8 13.3807 8 12 6.8807 9.5 5.5 9.5M5.5 16C4.1193 16 3 17.1193 3 18.5S4.1193 21 5.5 21 8 19.8807 8 18.5 6.8807 16 5.5 16" /></svg>;
const ForwardRef = forwardRef(DateDailyFilledIcon);
export default createLucideIcon('DateDailyFilledIcon', ForwardRef);
