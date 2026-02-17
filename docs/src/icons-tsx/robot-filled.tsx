import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RobotFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" viewBox="0 0 25 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.75 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1h-4.5c-2.2091 0-4 1.7909-4 4v.2676c-.5978.3458-1 .9921-1 1.7324s.4022 1.3866 1 1.7324V16c0 2.2091 1.7909 4 4 4h11c2.2091 0 4-1.7909 4-4v-4.2676c.5978-.3458 1-.9921 1-1.7324s-.4022-1.3866-1-1.7324V8c0-2.2091-1.7909-4-4-4h-4.5zm-4.5 5.5c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5m7 0c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6716-1.5-1.5-1.5m-5.5 5.5c-.5523 0-1 .4477-1 1s.4477 1 1 1h4c.5523 0 1-.4477 1-1s-.4477-1-1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(RobotFilledIcon);
export default ForwardRef;
