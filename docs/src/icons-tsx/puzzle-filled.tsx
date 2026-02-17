import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PuzzleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.5 4v-.5C9.5 2.1193 10.6193 1 12 1s2.5 1.1193 2.5 2.5V4h3.75C19.7688 4 21 5.2312 21 6.75V9a.5.5 0 0 1-.5.5c-1.3807 0-2.5 1.1193-2.5 2.5s1.1193 2.5 2.5 2.5a.5.5 0 0 1 .5.5v2.25c0 1.5188-1.2312 2.75-2.75 2.75H7c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PuzzleFilledIcon);
export default createLucideIcon('PuzzleFilledIcon', ForwardRef);
