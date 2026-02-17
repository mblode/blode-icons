import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ReceiptTaxFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 2C5.7909 2 4 3.7909 4 6v15a1 1 0 0 0 1.6508.7593l1.6825-1.4422 1.6826 1.4422c.3745.3209.927.3209 1.3016 0L12 20.3171l1.6825 1.4422a1 1 0 0 0 1.3016 0l1.6826-1.4422 1.6825 1.4422A1.0001 1.0001 0 0 0 20 21V6c0-2.2091-1.7909-4-4-4zm7.9571 5.0429c.3905.3905.3905 1.0237 0 1.4142l-6.5 6.5c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l6.5-6.5c.3905-.3905 1.0237-.3905 1.4142 0M10.25 8c0 .6904-.5596 1.25-1.25 1.25S7.75 8.6904 7.75 8 8.3096 6.75 9 6.75s1.25.5596 1.25 1.25M15 15.25c.6904 0 1.25-.5596 1.25-1.25s-.5596-1.25-1.25-1.25-1.25.5596-1.25 1.25.5596 1.25 1.25 1.25" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ReceiptTaxFilledIcon);
export default createLucideIcon('ReceiptTaxFilledIcon', ForwardRef);
