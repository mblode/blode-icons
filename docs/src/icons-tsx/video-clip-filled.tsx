import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VideoClipFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4zm4-2c-1.1046 0-2 .8954-2 2h2zm10 0v2h2c0-1.1046-.8954-2-2-2m2 4h-2v2h2zm0 4h-2v2.4444h2zm-.0496 4.4444H17V19c.9518 0 1.7483-.6649 1.9504-1.5556M15 13v-2H9v2zm-8 6v-2H5c0 1.1046.8954 2 2 2m-2-4h2v-2H5zm0-4h2V9H5z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(VideoClipFilledIcon);
export default createLucideIcon('VideoClipFilledIcon', ForwardRef);
