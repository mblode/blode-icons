import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TagFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 6c0-2.2091 1.7909-4 4-4h4.7574a4 4 0 0 1 2.8284 1.1716l7.25 7.25c1.5621 1.5621 1.5621 4.0947 0 5.6568l-4.7574 4.7574c-1.5621 1.5621-4.0947 1.5621-5.6568 0l-7.25-7.25A4 4 0 0 1 2 10.7574zm5.5 3C8.3284 9 9 8.3284 9 7.5S8.3284 6 7.5 6 6 6.6716 6 7.5 6.6716 9 7.5 9" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TagFilledIcon);
export default ForwardRef;
