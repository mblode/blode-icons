import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Dice4FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7 21c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4zM8 9.5c.8284 0 1.5-.6716 1.5-1.5S8.8284 6.5 8 6.5 6.5 7.1716 6.5 8 7.1716 9.5 8 9.5m0 8c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5m9.5-1.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5M16 9.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Dice4FilledIcon);
export default ForwardRef;
