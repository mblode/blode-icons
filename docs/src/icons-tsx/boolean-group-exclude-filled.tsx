import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BooleanGroupExcludeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16 16h2c2.2091 0 4-1.7909 4-4V6c0-2.2091-1.7909-4-4-4h-6C9.7909 2 8 3.7909 8 6v2H6c-2.2091 0-4 1.7909-4 4v6c0 2.2091 1.7909 4 4 4h6c2.2091 0 4-1.7909 4-4zM8 8h4c2.2091 0 4 1.7909 4 4v4h-4c-2.2091 0-4-1.7909-4-4z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BooleanGroupExcludeFilledIcon);
export default createLucideIcon('BooleanGroupExcludeFilledIcon', ForwardRef);
