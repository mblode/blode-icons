import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronLargeDownFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.126 9.5145c.2682-.4827.877-.6567 1.3598-.3885l7.5431 4.1906a2 2 0 0 0 1.9426 0l7.543-4.1906c.4828-.2682 1.0916-.0942 1.3598.3885s.0943 1.0916-.3885 1.3598l-7.543 4.1906a4 4 0 0 1-3.8852 0l-7.543-4.1906c-.4828-.2682-.6568-.877-.3886-1.3598" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChevronLargeDownFilledIcon);
export default createLucideIcon('ChevronLargeDownFilledIcon', ForwardRef);
