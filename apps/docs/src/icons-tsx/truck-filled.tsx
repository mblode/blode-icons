import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TruckFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M19.9646 16.9997 20 17c1.1046 0 2-.8954 2-2V8c0-2.2091-1.7909-4-4-4h-6c-1.4806 0-2.7733.8044-3.4649 2H6.6056a4 4 0 0 0-3.3282 1.7812l-.6056.9083A4 4 0 0 0 2 10.9083v3.3774c0 1.2605.8592 2.3203 2.024 2.6257C4.2275 18.6505 5.7061 20 7.5 20c1.7632 0 3.2219-1.3039 3.4646-3h2.0708c.2427 1.6961 1.7014 3 3.4646 3 1.7633 0 3.2221-1.304 3.4646-3.0003M8 8H6.6056a2 2 0 0 0-1.6642.8906l-.6055.9083A2 2 0 0 0 4 10.9083v3.3774c0 .2729.153.5101.378.6304C4.9562 13.779 6.137 13 7.5 13c.1698 0 .3367.0121.5.0354zm8.5 7c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5M6 16.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5S8.3284 18 7.5 18 6 17.3284 6 16.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(TruckFilledIcon);
export default createLucideIcon('TruckFilledIcon', ForwardRef);
