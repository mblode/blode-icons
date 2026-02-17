import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Cursor1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5.9772 2.7675c-1.988-.6797-3.8894 1.2217-3.2097 3.2097l4.9177 14.382c.7513 2.1973 3.8193 2.3038 4.7212.1638l2.3318-5.5331a.472.472 0 0 1 .2517-.2517l5.5331-2.3318c2.14-.9019 2.0335-3.9699-.1638-4.7212z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Cursor1FilledIcon);
export default createLucideIcon('Cursor1FilledIcon', ForwardRef);
