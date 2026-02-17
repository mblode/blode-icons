import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilePdfFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13 3H8C5.7909 3 4 4.7909 4 7v5h16v-2h-4c-1.6569 0-3-1.3431-3-3z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M19.8834 8a3 3 0 0 0-.7621-1.2929l-2.8284-2.8284A3 3 0 0 0 15 3.1167V7c0 .5523.4477 1 1 1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M3 15c0-.5523.4477-1 1-1h1.75c1.3807 0 2.5 1.1193 2.5 2.5S7.1307 19 5.75 19H5v1c0 .5523-.4477 1-1 1s-1-.4477-1-1zm2 2h.75a.5.5 0 0 0 0-1H5zM9 15c0-.5523.4477-1 1-1h1.25c.666 0 1.572.149 2.3431.6728C14.4211 15.2352 15 16.1709 15 17.5s-.5789 2.2648-1.4069 2.8272C12.822 20.851 11.916 21 11.25 21H10c-.5523 0-1-.4477-1-1zm2 1v3h.25c.4173 0 .8864-.101 1.2194-.3272.2762-.1876.5306-.5019.5306-1.1728s-.2544-.9852-.5306-1.1728C12.1364 16.101 11.6673 16 11.25 16zM16 15c0-.5523.4477-1 1-1h3c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2v1h1c.5523 0 1 .4477 1 1s-.4477 1-1 1h-1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FilePdfFilledIcon);
export default createLucideIcon('FilePdfFilledIcon', ForwardRef);
