import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileZipIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m14.3787 3.8787-.7071.707zm3.7426 3.7426.7071-.707zM14 3.5c0-.5523-.4477-1-1-1s-1 .4477-1 1zm4.5 6.5c.5523 0 1-.4477 1-1s-.4477-1-1-1zM6 18V6H4v12zm4 0v-2H8v2zm2-2v-2h-2v2zm-2-2v-2H8v2zm2 6v-2h-2v2zm4 0H8v2h8zM13.6716 4.5858l3.7426 3.7426 1.4142-1.4142-3.7426-3.7426zM12 3.5V6h2V3.5zm4 6.5h2.5V8H16zm2-.2574V18h2V9.7426zM8 4h4.2574V2H8zM4 18c0 2.2091 1.7909 4 4 4v-2c-1.1046 0-2-.8954-2-2zm12 4c2.2091 0 4-1.7909 4-4h-2c0 1.1046-.8954 2-2 2zm-.9142-18.8284A4 4 0 0 0 12.2574 2v2a2 2 0 0 1 1.4142.5858zm2.3284 5.1568c.3751.3751.5858.8838.5858 1.4142h2a4 4 0 0 0-1.1716-2.8284zM12 6c0 2.2091 1.7909 4 4 4V8c-1.1046 0-2-.8954-2-2zM6 6c0-1.1046.8954-2 2-2V2C5.7909 2 4 3.7909 4 6z" /></svg>;
const ForwardRef = forwardRef(FileZipIcon);
export default createLucideIcon('FileZipIcon', ForwardRef);
