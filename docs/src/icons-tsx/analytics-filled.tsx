import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AnalyticsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 3C4.7909 3 3 4.7909 3 7v4h4.382a2 2 0 0 1 1.7888 1.1056L10 13.7639l3.1056-6.2111a1 1 0 0 1 1.7888 0L16.618 11H21V7c0-2.2091-1.7909-4-4-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M3 17c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4v-4h-4.382a2 2 0 0 1-1.7888-1.1056L14 10.2361l-3.1056 6.2111a1 1 0 0 1-1.7888 0L7.382 13H3z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AnalyticsFilledIcon);
export default createLucideIcon('AnalyticsFilledIcon', ForwardRef);
