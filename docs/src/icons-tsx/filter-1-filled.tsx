import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Filter1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6.8284 3C4.7141 3 3 4.714 3 6.8284a3.828 3.828 0 0 0 1.1213 2.7071l4.293 4.2929A2 2 0 0 1 9 15.2426v4.8144c0 1.3964 1.3947 2.363 2.7022 1.8727l2-.75A2 2 0 0 0 15 19.307v-4.0644a2 2 0 0 1 .5858-1.4142l4.2929-4.2929A3.829 3.829 0 0 0 21 6.8285C21 4.714 19.286 3 17.1716 3z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Filter1FilledIcon);
export default ForwardRef;
