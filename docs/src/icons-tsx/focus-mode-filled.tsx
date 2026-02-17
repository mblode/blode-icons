import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FocusModeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 2.252C5.5496 3.1401 3 6.2723 3 10c0 1.8604.6362 3.5749 1.7023 4.934 1.1983 1.5275 1.3015 3.0075 1.3004 5.0652C6.002 21.1009 6.8922 22 8 22h5c1.1046 0 2-.8954 2-2 0-.5523.4477-1 1-1 1.6569 0 3-1.3431 3-3v-1.9338l1.1152-.6691c.9762-.5858 1.2776-1.8822.6117-2.8353q-.11-.1572-.2163-.3088c-.832-1.1866-1.4945-2.1314-2.0238-3.4845C17.2219 3.5352 14.1621 2 11 2v4.1707c1.1652.4118 2 1.523 2 2.8293v1c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3V9c0-1.3062.8348-2.4175 2-2.8293z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FocusModeFilledIcon);
export default createLucideIcon('FocusModeFilledIcon', ForwardRef);
