import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HomeOpenIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M20 17v-6.6701a3 3 0 0 0-.9854-2.223l-5-4.5312c-1.1433-1.036-2.8859-1.036-4.0292 0l-5 4.5312A3 3 0 0 0 4 10.33V17c0 1.6569 1.3431 3 3 3h2c.5523 0 1-.4477 1-1v-3c0-1.1046.8954-2 2-2s2 .8954 2 2v3c0 .5523.4477 1 1 1h2c1.6569 0 3-1.3431 3-3Z" /></svg>;
const ForwardRef = forwardRef(HomeOpenIcon);
export default createLucideIcon('HomeOpenIcon', ForwardRef);
