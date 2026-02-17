import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GhostFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="m7.1625 21.6251.545-.3881a2.005 2.005 0 0 1 1.9503-.2102l1.5544.6641a2.005 2.005 0 0 0 1.5756 0l1.5544-.6641a2.005 2.005 0 0 1 1.9503.2102l.545.3881C18.1613 22.5678 20 21.6243 20 20.0025V9.9759C20 5.571 16.4183 2 12 2S4 5.571 4 9.976v10.0265c0 1.6219 1.8387 2.5653 3.1625 1.6226M11 10.5c0 .8284-.6716 1.5-1.5 1.5S8 11.3284 8 10.5 8.6716 9 9.5 9s1.5.6716 1.5 1.5m3.5 1.5c.8284 0 1.5-.6716 1.5-1.5S15.3284 9 14.5 9s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GhostFilledIcon);
export default ForwardRef;
