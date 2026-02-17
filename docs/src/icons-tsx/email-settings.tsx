import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EmailSettingsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10v-.2c0-1.6802 0-2.5202-.327-3.162a3 3 0 0 0-1.311-1.311C18.7202 5 17.8802 5 16.2 5H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 7.2798 3 8.1198 3 9.8v4.4c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C5.2798 19 6.1198 19 7.8 19H12" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19.9999 6.2323-6.4641 3.8524a3 3 0 0 1-3.0717 0L4 6.2323M19.0001 20.25v-1m0-5.5v1m-1.9485 3.375-.8661.5m4.7632-2.75.866-.5m-4.7631.5-.8661-.5m4.7632 2.75.866.5M21.0001 17a1.99 1.99 0 0 0-.2676-1.0002c-.3459-.5977-.9922-.9998-1.7324-.9998s-1.3865.4021-1.7323.9999A1.99 1.99 0 0 0 17.0001 17c0 .3644.0975.706.2677 1.0002.3458.5977.9921.9998 1.7323.9998s1.3865-.4021 1.7324-.9998A1.99 1.99 0 0 0 21.0001 17" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(EmailSettingsIcon);
export default createLucideIcon('EmailSettingsIcon', ForwardRef);
