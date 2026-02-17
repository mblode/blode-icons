import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ZapFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.0019 2.4014c0-1.484-1.9249-2.0669-2.7481-.832L3.188 13.668c-.6645.9968.05 2.3321 1.2481 2.3321h5.5658v5.5986c0 1.4841 1.9248 2.0669 2.748.832l8.0658-12.0986c.6645-.9968-.0501-2.332-1.2481-2.332h-5.5657z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ZapFilledIcon);
export default createLucideIcon('ZapFilledIcon', ForwardRef);
