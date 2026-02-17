import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NoFlashFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.0019 2.4014c0-1.484-1.9249-2.0669-2.7481-.832L7.7252 6.8622 3.6644 3.2526c-.4128-.367-1.0449-.3297-1.4118.083s-.3297 1.0449.083 1.4118l18 16c.4128.3669 1.0449.3298 1.4118-.083s.3298-1.0449-.083-1.4118l-4.2671-3.7929 3.4184-5.1276c.6645-.9968-.0501-2.332-1.2481-2.332h-5.5657zM3.188 13.668l2.2972-3.4458 9.6721 8.5974-2.4074 3.6111c-.8232 1.2349-2.748.6521-2.748-.832v-5.5986H4.4361c-1.198 0-1.9126-1.3353-1.248-2.3321" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(NoFlashFilledIcon);
export default createLucideIcon('NoFlashFilledIcon', ForwardRef);
