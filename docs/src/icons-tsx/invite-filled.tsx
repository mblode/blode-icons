import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InviteFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10 7c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M4 10.3859V6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v4.3859c1.0641-.0017 2 .8596 2 2.0015V17c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4v-4.6126c0-1.1419.9359-2.0032 2-2.0015M6 6c0-1.1046.8954-2 2-2h8c1.1046 0 2 .8954 2 2v4.9459l-5.3675 1.7892a2 2 0 0 1-1.265 0L6 10.9459z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(InviteFilledIcon);
export default createLucideIcon('InviteFilledIcon', ForwardRef);
