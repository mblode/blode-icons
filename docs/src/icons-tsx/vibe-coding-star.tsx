import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VibeCodingStarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18.9847 2.4329a.4878.4878 0 0 0-.9693-.001c-.1774 1.538-1.0455 2.4061-2.5835 2.5835a.4878.4878 0 0 0 .001.9693c1.5162.1718 2.4445 1.0315 2.5812 2.5707a.4879.4879 0 0 0 .9719-.0011c.1313-1.5175 1.0508-2.437 2.5683-2.5683a.4878.4878 0 0 0 .0011-.9719c-1.5392-.1367-2.399-1.065-2.5707-2.5812" /><circle cx={8.75} cy={7.5} r={3.5} stroke="currentColor" strokeWidth={2} /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 20c0-3.3137 2.6863-6 6-6h.5M11 20l1.6892-5.9121A1.5 1.5 0 0 1 14.1315 13h6.4102c.7308 0 1.2584.6995 1.0577 1.4022l-1.3922 4.8725a1 1 0 0 1-.9615.7253zm0 0H7" /></svg>;
const ForwardRef = forwardRef(VibeCodingStarIcon);
export default createLucideIcon('VibeCodingStarIcon', ForwardRef);
