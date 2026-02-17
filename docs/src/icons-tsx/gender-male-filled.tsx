import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GenderMaleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M14 4c0-.5523.4477-1 1-1h5c.5523 0 1 .4477 1 1v5c0 .5523-.4477 1-1 1s-1-.4477-1-1V6.4142l-4.7511 4.7511C15.0356 12.2403 15.5 13.5659 15.5 15c0 3.5899-2.9101 6.5-6.5 6.5-3.5898 0-6.5-2.9101-6.5-6.5S5.4101 8.5 9 8.5c1.4341 0 2.7597.4644 3.8347 1.2511L17.5858 5H15c-.5523 0-1-.4477-1-1m-5 6.5c-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5 4.5-2.0147 4.5-4.5-2.0147-4.5-4.5-4.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GenderMaleFilledIcon);
export default createLucideIcon('GenderMaleFilledIcon', ForwardRef);
