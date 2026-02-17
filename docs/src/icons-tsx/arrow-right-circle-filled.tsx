import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowRightCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10m1.7071-13.7071c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L13.5858 11H8c-.5523 0-1 .4477-1 1s.4477 1 1 1h5.5858l-1.2929 1.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l3-3c.3905-.3905.3905-1.0237 0-1.4142z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowRightCircleFilledIcon);
export default createLucideIcon('ArrowRightCircleFilledIcon', ForwardRef);
