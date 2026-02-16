import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MultiMediaFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 6c0-2.2091 1.7909-4 4-4h6c2.2091 0 4 1.7909 4 4v2h2c2.2091 0 4 1.7909 4 4v6c0 2.2091-1.7909 4-4 4h-6c-2.2091 0-4-1.7909-4-4v-2H6c-2.2091 0-4-1.7909-4-4zm12 2V6c0-1.1046-.8954-2-2-2H6c-1.1046 0-2 .8954-2 2v4.1414a4 4 0 0 1 4.2188.1359l.13.0867C8.974 8.9705 10.3737 8 12 8zM5 6.25C5 5.5596 5.5596 5 6.25 5s1.25.5596 1.25 1.25S6.9404 7.5 6.25 7.5 5 6.9404 5 6.25m8.5415 6.2613a1 1 0 0 1 1.038.0737l2.25 1.6a1 1 0 0 1 0 1.63l-2.25 1.6A1 1 0 0 1 13 16.6v-3.2a1 1 0 0 1 .5415-.8887" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MultiMediaFilledIcon);
export default ForwardRef;
