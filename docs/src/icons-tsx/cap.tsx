import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CapIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13v5.4292c0 .7318.7625 1.2168 1.4416.9443 5.1856-2.0809 9.9312-2.0809 15.1168 0C20.2375 19.646 21 19.161 21 18.4292V13c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.5 14.7722c5.873-2.6123 11.127-2.6123 17 0M11.25 4.5c-.9524 1.1852-2.5 4.4444-2.5 8M12.25 4.5c.9524 1.1852 2.5 4.4444 2.5 8" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CapIcon);
export default ForwardRef;
