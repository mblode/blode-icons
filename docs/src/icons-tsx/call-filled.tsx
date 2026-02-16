import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CallFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6.7536 3c-2.0156 0-3.888 1.684-3.504 3.91 1.218 7.0578 6.784 12.6238 13.8417 13.8417 2.2261.3842 3.9101-1.4884 3.9101-3.5039 0-1.6571-1.0869-3.1179-2.6741-3.594l-.9945-.2984a2.825 2.825 0 0 0-2.8093.7083c-.2666.2666-.6093.2833-.8267.1488a12.07 12.07 0 0 1-3.908-3.9079c-.1344-.2174-.1177-.5601.1489-.8267a2.825 2.825 0 0 0 .7083-2.8094l-.2984-.9944C9.8715 4.0869 8.4106 3 6.7536 3" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CallFilledIcon);
export default ForwardRef;
