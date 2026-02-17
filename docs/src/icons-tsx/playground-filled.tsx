import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PlaygroundFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17.368 3.4312c-1.8672-.5003-3.7864.6077-4.2867 2.4748l-.2588.966c-.5003 1.867.6078 3.7863 2.4749 4.2866l.9659.2588c1.8672.5003 3.7863-.6078 4.2866-2.4749l.2589-.966c.5002-1.867-.6078-3.7862-2.4749-4.2865zM5.3459 6.366a1 1 0 0 0-1.6276.5923l-1.203 6.823a1 1 0 0 0 1.3267 1.1133l6.5104-2.3696a1 1 0 0 0 .3008-1.7057zM14.4443 13c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4 4-1.7908 4-4c0-2.2091-1.7908-4-4-4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PlaygroundFilledIcon);
export default ForwardRef;
