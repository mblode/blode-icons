import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirpodLeftFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 3a4.98 4.98 0 0 1 3.0664 1.0508c.684.532.9336 1.4176.9336 2.2842v3.33c0 .8666-.2496 1.7523-.9336 2.2842A4.98 4.98 0 0 1 9 13a5.02 5.02 0 0 1-1-.0996V19c0 1.1046-.8954 2-2 2s-2-.8954-2-2V8c0-2.7614 2.2386-5 5-5M16 13c.5523 0 1 .4477 1 1v5h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-3c-.5523 0-1-.4477-1-1v-6c0-.5523.4477-1 1-1" /></svg>;
const ForwardRef = forwardRef(AirpodLeftFilledIcon);
export default createLucideIcon('AirpodLeftFilledIcon', ForwardRef);
