import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ComponentsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.4141 2.2499c-.7811-.7811-2.0474-.7811-2.8285 0L8.4999 4.3355c-.7811.781-.7811 2.0474 0 2.8285l2.0857 2.0858c.7811.781 2.0474.781 2.8285 0l2.0858-2.0858c.781-.781.781-2.0474-.0001-2.8285zM7.164 8.4999c-.781-.7811-2.0473-.7811-2.8284 0l-2.0858 2.0857c-.781.7811-.781 2.0474 0 2.8285l2.0858 2.0858c.781.781 2.0474.781 2.8285-.0001l2.0858-2.0857c.781-.7811.781-2.0474 0-2.8285zM19.6641 8.4999c-.7811-.7811-2.0474-.7811-2.8285 0l-2.0858 2.0857c-.781.7811-.781 2.0474 0 2.8285l2.0858 2.0858c.7811.781 2.0474.781 2.8285-.0001l2.0858-2.0857c.781-.7811.781-2.0474-.0001-2.8285zM13.4141 14.7498c-.7811-.781-2.0474-.781-2.8285 0l-2.0857 2.0858c-.7811.7811-.7811 2.0474 0 2.8285l2.0857 2.0858c.7811.781 2.0474.781 2.8285-.0001l2.0858-2.0857c.781-.7811.781-2.0474-.0001-2.8285z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ComponentsFilledIcon);
export default createLucideIcon('ComponentsFilledIcon', ForwardRef);
