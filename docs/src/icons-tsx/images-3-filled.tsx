import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Images3FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.25 7c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M7 3C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4zm7.7071 10.2929 4.2252 4.2251A2 2 0 0 0 19 17V7c0-1.1046-.8954-2-2-2H7c-1.1046 0-2 .8954-2 2v6.5858l2.2929-2.2929c.3905-.3905 1.0237-.3905 1.4142 0L12 14.5858l1.2929-1.2929c.3905-.3905 1.0237-.3905 1.4142 0" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Images3FilledIcon);
export default createLucideIcon('Images3FilledIcon', ForwardRef);
