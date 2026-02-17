import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowUpLeftFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16 6.5c0-.8284-.6716-1.5-1.5-1.5h-8C5.6716 5 5 5.6716 5 6.5v8c0 .8284.6716 1.5 1.5 1.5S8 15.3284 8 14.5v-4.3787l8.4393 8.4394c.5858.5857 1.5356.5857 2.1214 0s.5857-1.5356 0-2.1214L10.1213 8H14.5c.8284 0 1.5-.6716 1.5-1.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowUpLeftFilledIcon);
export default ForwardRef;
