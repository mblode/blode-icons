import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BulletListFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 4C4.3431 4 3 5.3431 3 7s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3M13 6c-.5523 0-1 .4477-1 1s.4477 1 1 1h7c.5523 0 1-.4477 1-1s-.4477-1-1-1zM6 14c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3M13 16c-.5523 0-1 .4477-1 1s.4477 1 1 1h7c.5523 0 1-.4477 1-1s-.4477-1-1-1z" /></svg>;
const ForwardRef = forwardRef(BulletListFilledIcon);
export default createLucideIcon('BulletListFilledIcon', ForwardRef);
