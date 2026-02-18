import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StopwatchFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10 1c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1z" /><path fill="currentColor" fillRule="evenodd" d="M21 13c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9M8.2929 10.7071c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0l3 3c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(StopwatchFilledIcon);
export default createLucideIcon('StopwatchFilledIcon', ForwardRef);
