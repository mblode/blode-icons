import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Cursor3FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6.167 2.952c-2.0052-.7448-3.9588 1.2089-3.214 3.214l4.5465 12.2408c.6343 1.7076 2.8233 2.1854 4.1114.8973l1.14-1.14 3.3358 3.3358c.781.781 2.0473.781 2.8284 0l2.5858-2.5858c.781-.781.781-2.0474 0-2.8284l-3.3358-3.3358 1.14-1.14c1.2881-1.2881.8103-3.477-.8973-4.1113z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Cursor3FilledIcon);
export default createLucideIcon('Cursor3FilledIcon', ForwardRef);
