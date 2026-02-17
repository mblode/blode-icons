import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SlotsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.5822 2.4335C7.0952 1.6873 8.0162 1 9.5 1c1.4837 0 2.4048.6873 2.9178 1.4335.1343.1954.2372.389.3159.5665H14c2.2091 0 4 1.7909 4 4v7h.5c1.1046 0 2-.8954 2-2v-1.208C19.617 10.4062 19 9.5252 19 8.5 19 7.1193 20.1193 6 21.5 6S24 7.1193 24 8.5c0 1.0252-.617 1.9062-1.5 2.292V12c0 2.2091-1.7909 4-4 4H18v1c0 2.2091-1.7909 4-4 4H5c-2.2091 0-4-1.7909-4-4V7c0-2.2091 1.7909-4 4-4h1.2663a3.5 3.5 0 0 1 .316-.5665M16 9h-3v6h3zM3 15h3V9H3zm5-6v6h3V9z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M3.75 11.75a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0zM8.75 11.75a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0zM13.75 11.75a.75.75 0 0 1 1.5 0v.5a.75.75 0 0 1-1.5 0z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SlotsFilledIcon);
export default createLucideIcon('SlotsFilledIcon', ForwardRef);
