import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageEmptyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 2C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4V6c0-2.2091-1.7909-4-4-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PageEmptyFilledIcon);
export default ForwardRef;
