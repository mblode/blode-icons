import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageTextLinkFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v3.3414A5.99 5.99 0 0 0 18 9c-3.3137 0-6 2.6863-6 6v3c0 1.5367.5777 2.9385 1.5278 4H8c-2.2091 0-4-1.7909-4-4zm3 0c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M16 15c0-1.1046.8954-2 2-2s2 .8954 2 2c0 .5523.4477 1 1 1s1-.4477 1-1c0-2.2091-1.7909-4-4-4s-4 1.7909-4 4c0 .5523.4477 1 1 1s1-.4477 1-1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M19 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 .5523.4477 1 1 1s1-.4477 1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M16 18c0-.5523-.4477-1-1-1s-1 .4477-1 1c0 2.2091 1.7909 4 4 4s4-1.7909 4-4c0-.5523-.4477-1-1-1s-1 .4477-1 1c0 1.1046-.8954 2-2 2s-2-.8954-2-2" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PageTextLinkFilledIcon);
export default createLucideIcon('PageTextLinkFilledIcon', ForwardRef);
