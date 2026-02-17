import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LayersBehindFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h14c.5523 0 1-.4477 1-1s-.4477-1-1-1zM6 7c-2.2091 0-4 1.7909-4 4v5c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4v-5c0-2.2091-1.7909-4-4-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(LayersBehindFilledIcon);
export default ForwardRef;
