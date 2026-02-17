import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Coin1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M14 21c3.866 0 7-4.0294 7-9s-3.134-9-7-9m0 18c-3.866 0-7-4.0294-7-9s3.134-9 7-9m0 18h-4c-3.866 0-7-4.0294-7-9s3.134-9 7-9h4" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Coin1Icon);
export default createLucideIcon('Coin1Icon', ForwardRef);
