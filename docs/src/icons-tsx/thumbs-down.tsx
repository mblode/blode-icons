import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThumbsDownIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M17 13h3c.5523 0 1-.4477 1-1V5c0-.5523-.4477-1-1-1h-3m0 9V4m0 9-3.699 7.4505a.99.99 0 0 1-.8863.5495c-1.223 0-2.1575-1.0954-1.9691-2.3081L11.0192 15H5.9899c-1.8115 0-3.2067-1.6041-2.962-3.4053l.6795-5C3.9094 5.1082 5.1744 4 6.6694 4H17" /></svg>;
const ForwardRef = forwardRef(ThumbsDownIcon);
export default createLucideIcon('ThumbsDownIcon', ForwardRef);
