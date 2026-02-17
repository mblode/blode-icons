import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShieldCheck2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v9.1459a4 4 0 0 1-2.2111 3.5777l-5 2.5a4 4 0 0 1-3.5778 0l-5-2.5A4 4 0 0 1 3 16.1459zm12.2071 3.9571c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L11 12.3358l-.7929-.7929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l1.5 1.5a1 1 0 0 0 1.4142 0z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ShieldCheck2FilledIcon);
export default createLucideIcon('ShieldCheck2FilledIcon', ForwardRef);
