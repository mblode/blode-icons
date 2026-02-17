import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TreasureFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 4h8v6h-3c0-.5523-.4477-1-1-1s-1 .4477-1 1H8zM11 12H8v8h8v-8h-3c0 .5523-.4477 1-1 1s-1-.4477-1-1M18 12v8h1c1.6569 0 3-1.3431 3-3v-5zM18 4.1V10h4V9c0-2.419-1.7178-4.4367-4-4.9M6 4.1C3.7178 4.5633 2 6.581 2 9v1h4zM6 12H2v5c0 1.6569 1.3432 3 3 3h1z" /></svg>;
const ForwardRef = forwardRef(TreasureFilledIcon);
export default createLucideIcon('TreasureFilledIcon', ForwardRef);
