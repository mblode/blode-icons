import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GitForkIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M6.5 8C7.8807 8 9 6.8807 9 5.5S7.8807 3 6.5 3 4 4.1193 4 5.5 5.1193 8 6.5 8Zm0 0v1.25C6.5 10.7688 7.7312 12 9.25 12S12 13.2312 12 14.75M17.5 8C18.8807 8 20 6.8807 20 5.5S18.8807 3 17.5 3 15 4.1193 15 5.5 16.1193 8 17.5 8Zm0 0v1.25c0 1.5188-1.2312 2.75-2.75 2.75S12 13.2312 12 14.75M12 16c-1.3807 0-2.5 1.1193-2.5 2.5S10.6193 21 12 21s2.5-1.1193 2.5-2.5S13.3807 16 12 16Zm0 0v-1.25" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GitForkIcon);
export default createLucideIcon('GitForkIcon', ForwardRef);
