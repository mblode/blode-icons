import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Key1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M1 12c0-3.3137 2.6863-6 6-6 1.9736 0 3.7246.9539 4.8165 2.4215.028.0377.0569.0602.0764.071a.08.08 0 0 0 .0169.0075h8.1096a2 2 0 0 1 1.5617.7506l1.2 1.5a2 2 0 0 1 0 2.4988l-1.2 1.5a2 2 0 0 1-1.5617.7506H18a1 1 0 0 1-.4472-.1056L16 14.618l-1.5528.7764A1 1 0 0 1 14 15.5h-2.0902a.07.07 0 0 0-.0169.0074c-.0195.0109-.0484.0334-.0764.0711C10.7246 17.0461 8.9735 18 7 18c-3.3137 0-6-2.6863-6-6m6 1.5c.8284 0 1.5-.6716 1.5-1.5s-.6716-1.5-1.5-1.5-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Key1FilledIcon);
export default ForwardRef;
