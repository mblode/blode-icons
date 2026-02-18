import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowPathLeftFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8.5404 4.415c.977-.8142 2.4603-.1194 2.4603 1.1523v2.4325h7c2.2091 0 4 1.7909 4 4s-1.7909 4-4 4h-7v2.4325c0 1.2717-1.4833 1.9665-2.4603 1.1523l-6.7971-5.6642c-1.1994-.9995-1.1994-2.8417 0-3.8412z" /></svg>;
const ForwardRef = forwardRef(ArrowPathLeftFilledIcon);
export default createLucideIcon('ArrowPathLeftFilledIcon', ForwardRef);
