import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Smartwatch1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.8234 2.3675A2 2 0 0 1 8.7208 1h6.5584a2 2 0 0 1 1.8974 1.3675l.6996 2.099C19.1398 5.1386 20 6.4688 20 8v8c0 1.5311-.8602 2.8613-2.1238 3.5336l-.6996 2.0989A2 2 0 0 1 15.2792 23H8.7208a2 2 0 0 1-1.8974-1.3675l-.6996-2.0989C4.8602 18.8613 4 17.5311 4 16V8c0-1.5311.8602-2.8613 2.1238-3.5336zM8.3874 4h7.2252l-.3334-1H8.7208zm0 16 .3334 1h6.5584l.3334-1zM12 8c.5523 0 1 .4477 1 1v2.5858l1.2071 1.2071c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-1.5-1.5A1 1 0 0 1 11 12V9c0-.5523.4477-1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Smartwatch1FilledIcon);
export default createLucideIcon('Smartwatch1FilledIcon', ForwardRef);
