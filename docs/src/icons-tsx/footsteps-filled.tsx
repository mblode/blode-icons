import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FootstepsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10 16c.0275-.8202-.63-1.5-1.4506-1.5H5.551c-.8368 0-1.523.6636-1.551 1.5 0 1.6569 1.3431 3 3 3s3-1.3431 3-3M10.4246 11.9405C10.186 12.6186 9.5059 13 8.7871 13H5.213c-.719 0-1.399-.3814-1.6376-1.0595C2.293 8.2946 3.0365 2 6.9999 2c3.9633 0 4.7072 6.2947 3.4247 9.9405M20.4246 14.9405C20.186 15.6186 19.5059 16 18.7871 16H15.213c-.7188 0-1.399-.3814-1.6375-1.0595C12.293 11.2946 13.0365 5 16.9998 5s4.7073 6.2947 3.4248 9.9405M20 19c0-.8284-.6716-1.5-1.5-1.5h-3c-.8284 0-1.5.6716-1.5 1.5 0 1.6569 1.3431 3 3 3s3-1.3431 3-3" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FootstepsFilledIcon);
export default ForwardRef;
