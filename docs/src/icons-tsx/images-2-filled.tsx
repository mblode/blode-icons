import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Images2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.5 7C13.1193 7 12 8.1193 12 9.5s1.1193 2.5 2.5 2.5S17 10.8807 17 9.5 15.8807 7 14.5 7" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm13.4142 12-5.5858-5.5858c-1.562-1.5621-4.0947-1.5621-5.6568 0L5 13.5858V7c0-1.1046.8954-2 2-2h10c1.1046 0 2 .8954 2 2v10c0 1.1046-.8954 2-2 2z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Images2FilledIcon);
export default createLucideIcon('Images2FilledIcon', ForwardRef);
