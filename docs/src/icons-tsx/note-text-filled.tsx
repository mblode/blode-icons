import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const NoteTextFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v7h-3c-2.2091 0-4 1.7909-4 4v3H7c-2.2091 0-4-1.7909-4-4zm5 2c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H9c-.5523 0-1-.4477-1-1m1 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M16 20.8021a4 4 0 0 0 1.5858-.9737l2.2426-2.2426A4 4 0 0 0 20.8021 16H18c-1.1046 0-2 .8954-2 2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(NoteTextFilledIcon);
export default ForwardRef;
