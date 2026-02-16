import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CurrencyRupeesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3h14M5 8h14M16 21 5 13h6c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5H7" /></svg>;
const ForwardRef = forwardRef(CurrencyRupeesIcon);
export default ForwardRef;
