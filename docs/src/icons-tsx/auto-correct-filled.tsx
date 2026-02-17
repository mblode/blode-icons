import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AutoCorrectFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.0002 2a1 1 0 0 1 .9161.5992l4.8126 11A.9998.9998 0 0 1 14.8127 15h-8.971l-1.9253 4.4008c-.2213.506-.811.7367-1.317.5154s-.7367-.811-.5153-1.317l7-16A1 1 0 0 1 10.0001 2M6.7167 13h6.567l-3.2835-7.5051zm14.8383.1679c.4595.3064.5837.9273.2773 1.3868l-4.6667 7a1 1 0 0 1-.7335.4404 1 1 0 0 1-.8056-.288l-2.3334-2.3333c-.3905-.3906-.3905-1.0237 0-1.4142.3906-.3906 1.0237-.3906 1.4143 0l1.4708 1.4708 3.99-5.9851c.3064-.4595.9272-.5837 1.3868-.2774" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AutoCorrectFilledIcon);
export default ForwardRef;
