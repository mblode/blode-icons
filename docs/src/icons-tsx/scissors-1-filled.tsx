import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Scissors1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 5c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2M2 7c0-2.2091 1.7909-4 4-4s4 1.7909 4 4-1.7909 4-4 4-4-1.7909-4-4M6 15c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2m-4 2c0-2.2091 1.7909-4 4-4s4 1.7909 4 4-1.7909 4-4 4-4-1.7909-4-4" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M20.5961 5.9457a4 4 0 0 0-4.2369-.559L13.3233 6.788a4 4 0 0 0-2.3238 3.6319v.1534l-3.6176-1.497-.7647 1.8481 2.6003 1.076-2.6003 1.076.7647 1.848 3.6176-1.497v.1535a4 4 0 0 0 2.3238 3.6318l3.0359 1.4012a4 4 0 0 0 4.2369-.559l1.5436-1.2863a1 1 0 0 0-.2578-1.6922l-7.4336-3.076 7.4336-3.076a1 1 0 0 0 .2578-1.6923z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Scissors1FilledIcon);
export default createLucideIcon('Scissors1FilledIcon', ForwardRef);
