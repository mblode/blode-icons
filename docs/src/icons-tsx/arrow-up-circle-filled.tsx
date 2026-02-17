import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowUpCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12s4.4772 10 10 10 10-4.4772 10-10M8.2929 10.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L11 10.4142V16c0 .5523.4477 1 1 1s1-.4477 1-1v-5.5858l1.2929 1.2929c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-3-3c-.3905-.3905-1.0237-.3905-1.4142 0z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowUpCircleFilledIcon);
export default createLucideIcon('ArrowUpCircleFilledIcon', ForwardRef);
