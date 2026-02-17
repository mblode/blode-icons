import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FinderFaceFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 4c.6904 0 1.25.5596 1.25 1.25v2.5C6.25 8.4404 5.6904 9 5 9s-1.25-.5596-1.25-1.25v-2.5C3.75 4.5596 4.3096 4 5 4m14 0c.6904 0 1.25.5596 1.25 1.25v2.5C20.25 8.4404 19.6904 9 19 9s-1.25-.5596-1.25-1.25v-2.5c0-.6904.5596-1.25 1.25-1.25m-6 1c.6904 0 1.25.5596 1.25 1.25v6c0 1.7949-1.4551 3.25-3.25 3.25-.6904 0-1.25-.5596-1.25-1.25S10.3096 13 11 13a.75.75 0 0 0 .75-.75v-6c0-.6904.5596-1.25 1.25-1.25M5.0367 16.4534c.44-.532 1.2278-.6066 1.7599-.1667C8.6605 17.828 10.3804 18.5 12 18.5s3.3395-.672 5.2034-2.2133c.5321-.4399 1.32-.3653 1.7599.1667s.3653 1.32-.1667 1.7599C16.6294 20.0054 14.3649 21 12 21s-4.6294-.9946-6.7966-2.7867c-.532-.4399-.6067-1.2278-.1667-1.7599" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FinderFaceFilledIcon);
export default createLucideIcon('FinderFaceFilledIcon', ForwardRef);
