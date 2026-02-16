import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const KeyframeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.828 3.1642c-1.5621-1.562-4.0948-1.562-5.6569 0L3.1638 9.1716c-1.5621 1.5621-1.5621 4.0947 0 5.6568l6.0073 6.0074c1.5621 1.5621 4.0948 1.5621 5.6569 0l6.0073-6.0074c1.5621-1.5621 1.5621-4.0947 0-5.6568z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(KeyframeFilledIcon);
export default ForwardRef;
