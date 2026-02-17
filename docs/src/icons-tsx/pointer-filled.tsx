import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PointerFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.9314 8.6667h5.5116c1.8264 0 3.307 1.4924 3.307 3.3333v2.0325C20.75 18.4328 17.211 22 12.8455 22c-2.9348 0-5.628-1.6389-6.9948-4.2567l-2.9865-5.7196a1.006 1.006 0 0 1 .1032-1.0904l.4217-.5314c.7606-.9583 2.148-1.1137 3.0988-.347l1.0343.834V4.2222C7.5222 2.995 8.5092 2 9.7267 2s2.2046.995 2.2046 2.2222z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PointerFilledIcon);
export default createLucideIcon('PointerFilledIcon', ForwardRef);
