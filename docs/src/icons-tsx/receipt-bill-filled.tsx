import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ReceiptBillFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v15a1 1 0 0 1-1.6508.7593l-1.6825-1.4422-1.6826 1.4422a1 1 0 0 1-1.3016 0L12 20.3171l-1.6825 1.4422a1 1 0 0 1-1.3016 0l-1.6826-1.4422-1.6825 1.4422A1 1 0 0 1 4 21zm4 2c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ReceiptBillFilledIcon);
export default createLucideIcon('ReceiptBillFilledIcon', ForwardRef);
