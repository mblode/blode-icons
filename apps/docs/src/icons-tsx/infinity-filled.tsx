import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InfinityFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><g clipPath="url(#a)"><path fill="currentColor" fillRule="evenodd" d="M1.6318 8.1065c2.1689-2.142 5.6802-2.142 7.849 0L12 10.5945l2.5191-2.488c2.1689-2.142 5.6802-2.142 7.8491 0 2.1757 2.1489 2.1757 5.6381 0 7.787-2.1689 2.142-5.6802 2.142-7.8491 0L12 13.4055l-2.5191 2.488c-2.1689 2.142-5.6802 2.142-7.849 0-2.1758-2.1489-2.1758-5.6381 0-7.787M10.577 12 8.0755 9.5295c-1.3899-1.3727-3.6484-1.3727-5.0383 0a3.461 3.461 0 0 0 0 4.941c1.3899 1.3727 3.6484 1.3727 5.0383 0zm2.8462 0 2.5014 2.4705c1.3899 1.3727 3.6484 1.3727 5.0383 0a3.461 3.461 0 0 0 0-4.941c-1.3899-1.3727-3.6484-1.3727-5.0383 0z" clipRule="evenodd" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" style={{
        fill: "#fff",
        fillOpacity: 1
      }} /></clipPath></defs></svg>;
const ForwardRef = forwardRef(InfinityFilledIcon);
export default createLucideIcon('InfinityFilledIcon', ForwardRef);
