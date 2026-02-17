import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OmegaFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 4c-3.5898 0-6.5 2.9101-6.5 6.5 0 2.9882 2.0172 5.5078 4.7661 6.2664a1 1 0 0 1 .7339.964V19c0 1.6569-1.3431 3-3 3H6c-1.6569 0-3-1.3431-3-3 0-.5523.4477-1 1-1s1 .4477 1 1 .4477 1 1 1h2c.5523 0 1-.4477 1-1v-.5449C5.7866 17.2426 3.5 14.1394 3.5 10.5 3.5 5.8056 7.3056 2 12 2s8.5 3.8056 8.5 8.5c0 3.6394-2.2866 6.7426-5.5 7.9551V19c0 .5523.4477 1 1 1h2c.5523 0 1-.4477 1-1s.4477-1 1-1 1 .4477 1 1c0 1.6569-1.3431 3-3 3h-2c-1.6569 0-3-1.3431-3-3v-1.2696a1 1 0 0 1 .7339-.964C16.4828 16.0078 18.5 13.4882 18.5 10.5 18.5 6.9102 15.5899 4 12 4" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(OmegaFilledIcon);
export default createLucideIcon('OmegaFilledIcon', ForwardRef);
