import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Bubble2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18.002 3c2.2091 0 4 1.7909 4 4v8c0 2.2091-1.7909 4-4 4h-5.7231l-4.7624 2.8575A1 1 0 0 1 6.002 21v-2c-2.2092 0-4-1.7909-4-4V7c0-2.2091 1.7908-4 4-4z" /></svg>;
const ForwardRef = forwardRef(Bubble2FilledIcon);
export default createLucideIcon('Bubble2FilledIcon', ForwardRef);
