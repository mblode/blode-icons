import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileLockFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 2h4v5c0 1.6569 1.3431 3 3 3h5v8c0 2.2091-1.7909 4-4 4h-4.1273a3.484 3.484 0 0 0 .6273-2v-2c0-.9673-.3928-1.8419-1.0247-2.4741C11.2384 13.2634 9.3251 11.5 7 11.5c-1.1525 0-2.2039.4333-3 1.1458V6c0-2.2091 1.7909-4 4-4" /><path fill="currentColor" d="M14 2.5858 19.4142 8H15c-.5523 0-1-.4477-1-1z" /><path fill="currentColor" fillRule="evenodd" d="M10 16.2676V16c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v.2676c-.5978.3458-1 .9921-1 1.7324v2c0 1.1046.8954 2 2 2h4c1.1046 0 2-.8954 2-2v-2c0-.7403-.4022-1.3866-1-1.7324M6 16h2c0-.5523-.4477-1-1-1s-1 .4477-1 1m3 2H5v2h4z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(FileLockFilledIcon);
export default createLucideIcon('FileLockFilledIcon', ForwardRef);
