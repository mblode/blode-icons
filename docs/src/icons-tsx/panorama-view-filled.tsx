import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PanoramaViewFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M23 8.1537c0-2.773-2.6746-4.5918-5.215-4.062-3.9094.8154-7.6606.8154-11.57 0C3.6747 3.562 1 5.3808 1 8.1538v7.6877c0 2.7819 2.6893 4.5994 5.2332 4.0656 3.8884-.8161 7.6452-.8161 11.5336 0C20.3107 20.4408 23 18.6233 23 15.8414z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PanoramaViewFilledIcon);
export default createLucideIcon('PanoramaViewFilledIcon', ForwardRef);
