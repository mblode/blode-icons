import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleWideFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18.0019 3h-12c-2.209 0-4 1.7909-4 4v8.0358c0 2.2091 1.791 4 4 4h2.6497l2.7037 2.2663a1 1 0 0 0 1.2804.0037l2.74-2.27h2.6263c2.2091-.0001 4-1.7909 4-4V7c0-2.2091-1.7909-4-4.0001-4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BubbleWideFilledIcon);
export default createLucideIcon('BubbleWideFilledIcon', ForwardRef);
