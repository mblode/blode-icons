import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NoFlashIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.7252 6.8622 3.6644 3.2526c-.4128-.367-1.0449-.3297-1.4118.083s-.3297 1.0449.083 1.4118l18 16c.4128.3669 1.0449.3298 1.4118-.083s.3298-1.0449-.083-1.4118l-4.2671-3.7929 3.4184-5.1276c.6645-.9968-.0501-2.332-1.2481-2.332h-5.5657V2.4014c0-1.484-1.9249-2.0669-2.7481-.832zm1.5093 1.3416 6.6535 5.9143 2.7453-4.118h-5.1314c-.8285 0-1.5-.6716-1.5-1.5V4.0528z" clipRule="evenodd" /><path fill="currentColor" d="m5.4852 10.2222 1.5093 1.3416-1.6241 2.4363h5.1315c.8284 0 1.5.6715 1.5 1.5v4.4472l1.6461-2.4693 1.5093 1.3416-2.4074 3.6111c-.8232 1.2349-2.748.6521-2.748-.832v-5.5986H4.4361c-1.198 0-1.9126-1.3353-1.248-2.3321z" /></svg>;
const ForwardRef = forwardRef(NoFlashIcon);
export default createLucideIcon('NoFlashIcon', ForwardRef);
