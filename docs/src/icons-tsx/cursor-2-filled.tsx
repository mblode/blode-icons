import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Cursor2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6.167 2.952c-2.0052-.7448-3.9588 1.2089-3.214 3.214l4.5465 12.2408c.6343 1.7076 2.8233 2.1854 4.1114.8973l3.14-3.14 5.5429 5.5429c.3905.3905 1.0236.3905 1.4142 0s.3905-1.0237 0-1.4142l-5.5429-5.5429 3.14-3.14c1.2881-1.2881.8103-3.477-.8973-4.1113z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Cursor2FilledIcon);
export default ForwardRef;
