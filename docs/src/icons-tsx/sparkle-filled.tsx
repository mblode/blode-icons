import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SparkleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" viewBox="0 0 25 24" ref={ref} {...props}><path fill="currentColor" d="M13.75 3c0-.5523-.4477-1-1-1s-1 .4477-1 1c0 3.1884-.669 5.2556-1.8822 6.5362C8.6662 10.8046 6.7399 11.5 3.75 11.5c-.5523 0-1 .4477-1 1s.4477 1 1 1c2.99 0 4.9162.6954 6.1178 1.9638C11.081 16.7444 11.75 18.8116 11.75 22c0 .5523.4477 1 1 1s1-.4477 1-1c0-3.1884.669-5.2556 1.8822-6.5362C16.8338 14.1954 18.76 13.5 21.75 13.5c.5523 0 1-.4477 1-1s-.4477-1-1-1c-2.99 0-4.9162-.6954-6.1178-1.9638C14.419 8.2556 13.75 6.1884 13.75 3" /></svg>;
const ForwardRef = forwardRef(SparkleFilledIcon);
export default createLucideIcon('SparkleFilledIcon', ForwardRef);
