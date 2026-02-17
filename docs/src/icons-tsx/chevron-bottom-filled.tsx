import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronBottomFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3.2929 8.2929c.3905-.3905 1.0237-.3905 1.4142 0l5.8787 5.8787c.781.781 2.0474.781 2.8284 0l5.8787-5.8787c.3905-.3905 1.0237-.3905 1.4142 0s.3905 1.0237 0 1.4142l-5.8787 5.8787c-1.5621 1.5621-4.0947 1.5621-5.6568 0L3.2929 9.7071c-.3905-.3905-.3905-1.0237 0-1.4142" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChevronBottomFilledIcon);
export default createLucideIcon('ChevronBottomFilledIcon', ForwardRef);
