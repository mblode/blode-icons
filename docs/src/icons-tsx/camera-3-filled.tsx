import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Camera3FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 3C3.7909 3 2 4.7909 2 7v10c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4zm2.5 9c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5m9-3.25c-.6904 0-1.25-.5596-1.25-1.25s.5596-1.25 1.25-1.25 1.25.5596 1.25 1.25-.5596 1.25-1.25 1.25" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Camera3FilledIcon);
export default createLucideIcon('Camera3FilledIcon', ForwardRef);
