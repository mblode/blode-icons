import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Wallet2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 4C3.7909 4 2 5.7909 2 8v8c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4V8c0-2.2091-1.7909-4-4-4zM5 8c0-.5523.4477-1 1-1h12c.5523 0 1 .4477 1 1v2h-1.4142a3.414 3.414 0 0 0-2.4142 1 3.414 3.414 0 0 1-2.4142 1h-1.5148a3.414 3.414 0 0 1-2.4142-1 3.414 3.414 0 0 0-2.4142-1H5z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Wallet2FilledIcon);
export default createLucideIcon('Wallet2FilledIcon', ForwardRef);
