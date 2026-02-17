import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShareFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17 2c-2.2091 0-4 1.7909-4 4 0 .3193.0376.6304.1087.929L8.954 9.3031C8.2232 8.5032 7.1708 8 6 8c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4c1.1708 0 2.2232-.5032 2.954-1.3031l4.1547 2.3741A4 4 0 0 0 13 18c0 2.2091 1.7909 4 4 4s4-1.7909 4-4-1.7909-4-4-4c-1.1709 0-2.2232.5032-2.954 1.3031L9.8913 12.929A4 4 0 0 0 10 12c0-.3193-.0376-.6304-.1087-.929l4.1547-2.3741C14.7768 9.4968 15.8291 10 17 10c2.2091 0 4-1.7909 4-4s-1.7909-4-4-4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ShareFilledIcon);
export default ForwardRef;
