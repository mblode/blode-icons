import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowPathDownFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4.415 15.4606c-.8142-.977-.1194-2.4603 1.1523-2.4603h2.4325v-7c0-2.2091 1.7909-4 4-4s4 1.7909 4 4v7h2.4325c1.2717 0 1.9665 1.4833 1.1523 2.4603l-5.6642 6.7971c-.9995 1.1994-2.8417 1.1994-3.8412 0z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowPathDownFilledIcon);
export default createLucideIcon('ArrowPathDownFilledIcon', ForwardRef);
