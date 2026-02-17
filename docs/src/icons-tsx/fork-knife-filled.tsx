import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ForkKnifeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 3c.5523 0 1 .4477 1 1v5.5a.5.5 0 0 0 1 0V4c0-.5523.4477-1 1-1s1 .4477 1 1v5.5a.5.5 0 0 0 1 0V4c0-.5523.4477-1 1-1s1 .4477 1 1v6.4142a2 2 0 0 1-.8 1.6l-.4.3a2 2 0 0 0-.8 1.6V19c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-5.0858a2 2 0 0 0-.8-1.6l-.4-.3a2 2 0 0 1-.8-1.6V4c0-.5523.4477-1 1-1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M19 3c.5523 0 1 .4477 1 1v15c0 1.1046-.8954 2-2 2s-2-.8954-2-2v-3h-2c-.5727 0-1.0284-.4801-.9986-1.052.2157-4.1422 1.2553-7.059 2.4273-8.9707.5842-.9528 1.2064-1.6638 1.7832-2.1489.2876-.2419.576-.4377.8546-.5775C18.3271 3.1198 18.6541 3 19 3" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ForkKnifeFilledIcon);
export default createLucideIcon('ForkKnifeFilledIcon', ForwardRef);
