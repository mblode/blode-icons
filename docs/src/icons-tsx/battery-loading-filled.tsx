import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BatteryLoadingFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 5h6.5l-4.8 6.4a1 1 0 0 0 .8 1.6h4L7 19H5c-2.2091 0-4-1.7909-4-4V9c0-2.2091 1.7909-4 4-4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M16 19H9.5l4.8-6.4a.9999.9999 0 0 0-.8-1.6h-4L14 5h2c1.8638 0 3.4299 1.2748 3.874 3h.626c1.3807 0 2.5 1.1193 2.5 2.5v3c0 1.3807-1.1193 2.5-2.5 2.5h-.626c-.4441 1.7252-2.0102 3-3.874 3m4-5h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5H20z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BatteryLoadingFilledIcon);
export default ForwardRef;
