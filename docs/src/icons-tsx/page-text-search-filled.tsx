import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageTextSearchFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v6.0218C18.9897 11.375 17.7886 11 16.5 11c-3.5899 0-6.5 2.9101-6.5 6.5 0 1.7465.6888 3.3321 1.8096 4.5H8c-2.2091 0-4-1.7909-4-4zm3 0c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M16.5 13c-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5a4.48 4.48 0 0 0 2.4136-.7016l.8677.8969c.384.3969 1.0171.4074 1.414.0234s.4074-1.0171.0234-1.414l-.8973-.9275A4.48 4.48 0 0 0 21 17.5c0-2.4853-2.0147-4.5-4.5-4.5M14 17.5c0-1.3807 1.1193-2.5 2.5-2.5s2.5 1.1193 2.5 2.5a2.49 2.49 0 0 1-.7142 1.7496c-.455.4642-1.0861.7504-1.7858.7504-1.3807 0-2.5-1.1193-2.5-2.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PageTextSearchFilledIcon);
export default createLucideIcon('PageTextSearchFilledIcon', ForwardRef);
