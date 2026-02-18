import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PercentFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10S17.5228 2 12 2m4.2071 5.7929c.3905.3905.3905 1.0237 0 1.4142l-7 7c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l7-7c.3905-.3905 1.0237-.3905 1.4142 0M10.25 9c0 .6904-.5596 1.25-1.25 1.25S7.75 9.6904 7.75 9 8.3096 7.75 9 7.75s1.25.5596 1.25 1.25m6 6c0 .6904-.5596 1.25-1.25 1.25s-1.25-.5596-1.25-1.25.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(PercentFilledIcon);
export default createLucideIcon('PercentFilledIcon', ForwardRef);
