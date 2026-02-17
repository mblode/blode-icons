import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChromeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4.4146 5.4838C9.0633.0736 17.6827 1.1415 20.905 7.4613c-2.2683.0008-5.8203-.0006-7.744 0-1.3953.0004-2.296-.0313-3.2716.4823-1.147.6037-2.0124 1.7228-2.3144 3.0373z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M8.673 11.9995c0 1.8336 1.4909 3.3254 3.3235 3.3254 1.8325 0 3.3234-1.4917 3.3234-3.3254 0-1.8336-1.4909-3.3254-3.3234-3.3254S8.673 10.1659 8.673 11.9995" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M13.2863 16.3521c-1.8654.5543-4.0483-.0605-5.2441-2.1245-.9128-1.5755-3.3245-5.7768-4.4206-7.687-3.839 5.884-.5303 13.9025 6.4393 15.2711z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M15.0837 8.674c1.5537 1.445 1.8921 3.785.8396 5.5994-.7929 1.367-3.3235 5.6382-4.5501 7.7064 7.1809.4427 12.4156-6.595 10.0511-13.3057z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ChromeFilledIcon);
export default createLucideIcon('ChromeFilledIcon', ForwardRef);
