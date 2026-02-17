import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HammerFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M1.7499 12.6642c-.7811-.7811-.7811-2.0474 0-2.8284l7.25-7.25A2 2 0 0 1 10.414 2h3.6717a2 2 0 0 1 1.4142.5858l.9999 1c.7811.781.7811 2.0473 0 2.8284L7.414 15.5c-.781.781-2.0473.781-2.8284 0z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M20.5001 20.5002c-.8787.8786-2.3033.8786-3.182 0l-6.159-6.159 3.182-3.182 6.159 6.159c.8787.8787.8787 2.3033 0 3.182" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(HammerFilledIcon);
export default createLucideIcon('HammerFilledIcon', ForwardRef);
