import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BezierRemoveFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10 11c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M3 5.5C3 4.1193 4.1193 3 5.5 3h1c1.2095 0 2.2184.8589 2.45 2h6.1c.2316-1.1411 1.2405-2 2.45-2h1C19.8807 3 21 4.1193 21 5.5v1c0 1.2095-.8589 2.2184-2 2.45v6.1c1.1411.2316 2 1.2405 2 2.45v1c0 1.3807-1.1193 2.5-2.5 2.5h-1c-1.2095 0-2.2184-.8589-2.45-2h-6.1c-.2316 1.1411-1.2405 2-2.45 2h-1C4.1193 21 3 19.8807 3 18.5v-1c0-1.2095.8589-2.2184 2-2.45v-6.1C3.8589 8.7184 3 7.7095 3 6.5zm4 3.45v6.1c.9796.1988 1.7512.9704 1.95 1.95h6.1c.1988-.9796.9704-1.7512 1.95-1.95v-6.1c-.9796-.1988-1.7512-.9704-1.95-1.95h-6.1c-.1988.9796-.9704 1.7512-1.95 1.95" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BezierRemoveFilledIcon);
export default ForwardRef;
