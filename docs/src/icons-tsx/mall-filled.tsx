import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MallFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 4C3.7909 4 2 5.7909 2 8v8c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4V8c0-2.2091-1.7909-4-4-4zm2 9c0-1.1046.8954-2 2-2h1v7H8zm5 5h3v-5c0-1.1046-.8954-2-2-2h-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MallFilledIcon);
export default ForwardRef;
