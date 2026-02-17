import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Store1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.2497 3h-4.5l-.3041 4.257C9.3397 8.7392 10.5137 10 11.9997 10s2.6599-1.2608 2.554-2.743zM21.4904 6.4343C21.2089 4.4637 19.5212 3 17.5306 3h-1.2808l.3328 4.6604C16.6768 8.9787 17.7737 10 19.0953 10c1.5329 0 2.7105-1.3577 2.4937-2.8753zM2.5092 6.4343C2.7907 4.4637 4.4784 3 6.469 3h1.2808l-.3329 4.6604C7.3228 8.9787 6.226 10 4.9043 10c-1.533 0-2.7105-1.3577-2.4937-2.8753zM2.9998 11.5814V17c0 2.2092 1.7908 4 4 4h10c2.2091 0 4-1.7908 4-4v-5.4187c-.5764.2681-1.2208.4187-1.9046.4187-1.4267 0-2.7073-.6634-3.5379-1.707C14.7241 11.3306 13.4447 12 11.9996 12s-2.7245-.6694-3.5576-1.7069C7.6113 11.3367 6.3307 12 4.9042 12c-.6838 0-1.3282-.1505-1.9044-.4186" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Store1FilledIcon);
export default createLucideIcon('Store1FilledIcon', ForwardRef);
