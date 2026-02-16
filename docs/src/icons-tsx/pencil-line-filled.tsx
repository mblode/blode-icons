import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PencilLineFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.6716 3.4143c1.5621-1.5621 4.0947-1.5621 5.6568 0l.2574.2573c1.5621 1.5621 1.5621 4.0948 0 5.6569l-11.5 11.5A4 4 0 0 1 6.2574 22H3c-.5523 0-1-.4477-1-1v-3.2573a4 4 0 0 1 1.1716-2.8285zM14 20c-.5523 0-1 .4477-1 1s.4477 1 1 1h7c.5523 0 1-.4477 1-1s-.4477-1-1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PencilLineFilledIcon);
export default ForwardRef;
