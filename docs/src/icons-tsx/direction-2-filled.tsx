import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Direction2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 3c-.5523 0-1 .4477-1 1v4H5.5C3.567 8 2 9.567 2 11.5S3.567 15 5.5 15H11v4H8c-.5523 0-1 .4477-1 1s.4477 1 1 1h8c.5523 0 1-.4477 1-1s-.4477-1-1-1h-3v-9h5.5c1.933 0 3.5-1.567 3.5-3.5S20.433 3 18.5 3z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Direction2FilledIcon);
export default createLucideIcon('Direction2FilledIcon', ForwardRef);
