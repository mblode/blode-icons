import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AspectRatio169FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 5C2.7909 5 1 6.7909 1 9v6c0 2.2091 1.7909 4 4 4h14c2.2091 0 4-1.7909 4-4V9c0-2.2091-1.7909-4-4-4z" /></svg>;
const ForwardRef = forwardRef(AspectRatio169FilledIcon);
export default createLucideIcon('AspectRatio169FilledIcon', ForwardRef);
