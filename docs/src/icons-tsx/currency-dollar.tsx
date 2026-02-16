import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CurrencyDollarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M6 17.3153c2.2857 4.2394 12 3.8438 12-.9148 0-5.543-11.5-2.6894-11.5-8.829 0-4.3172 7.7288-5.0422 10.78-1.8396M12 22.5v-21" /></svg>;
const ForwardRef = forwardRef(CurrencyDollarIcon);
export default ForwardRef;
