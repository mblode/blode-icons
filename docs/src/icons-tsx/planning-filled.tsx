import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PlanningFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.1 5.2c.4419.3314.5314.9582.2 1.4l-3 4.0001a1 1 0 0 1-1.4402.1682l-1.5-1.25c-.4242-.3536-.4816-.9841-.128-1.4084s.9841-.4816 1.4084-.128l.6914.576L7.7 5.4002c.3314-.4419.9582-.5314 1.4-.2M12 8c0-.5522.4477-1 1-1h7c.5523 0 1 .4478 1 1s-.4477 1-1 1h-7c-.5523 0-1-.4477-1-1m-9 8.0001c0-1.6569 1.3432-3 3-3s3 1.3431 3 3-1.3431 3-3 3-3-1.3431-3-3m9 0c0-.5523.4477-1 1-1h7c.5523 0 1 .4477 1 1s-.4477 1-1 1h-7c-.5523 0-1-.4478-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PlanningFilledIcon);
export default ForwardRef;
