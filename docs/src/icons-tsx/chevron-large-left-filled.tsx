import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronLargeLeftFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M14.4854 2.126c.4828.2682.6567.877.3885 1.3598l-4.1906 7.5431a2 2 0 0 0 0 1.9426l4.1906 7.543c.2682.4828.0943 1.0916-.3885 1.3598s-1.0916.0943-1.3598-.3885l-4.1906-7.543a4 4 0 0 1 0-3.8852l4.1906-7.543c.2682-.4828.877-.6568 1.3598-.3886" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChevronLargeLeftFilledIcon);
export default ForwardRef;
