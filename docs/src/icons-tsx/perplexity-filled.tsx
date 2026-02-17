import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PerplexityFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="m6 1.8686 5.4919 5V2h1v4.8708l5.5081-5v5.6857l2.2539.0002v8.5377H18v6.094l-5.5081-5.3873V22h-1v-5.163L6.094 22.1868 6.027 16H3.5V7.5555l2.5.0002zm1 5.6871 3.7616.0003L7 4.1314zm3.7778 1.0003L4.5 8.5556V15h1.5162l-.0185-1.7062zm.7141.7002-4.4896 4.45.066 6.107 4.4236-4.3842zm1.002-.0005.0102 6.1586L17 19.8116v-6.1028zm.7148-.6995L18 13.291v1.8033h1.2539V8.5566zm.016-1L17 7.5565V4.1968l-.0699-.0042z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PerplexityFilledIcon);
export default createLucideIcon('PerplexityFilledIcon', ForwardRef);
