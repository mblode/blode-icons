import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Hand5FingerFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.0673 2c-.6259 0-1.1333.5045-1.1333 1.1268v6.7605c0 .3112-.2537.5634-.5666.5634s-.5666-.2522-.5666-.5634V4.2535c0-.6223-.5074-1.1267-1.1333-1.1267s-1.1332.5044-1.1332 1.1267v6.8929a.563.563 0 0 1-.3548.5226.569.569 0 0 1-.6201-.1319l-1.3466-1.3913c-.7762-.802-2.1065-.652-2.6824.3024l-.0304.0503 2.794 6.7849C6.469 20.1363 9.2617 22 12.3624 22 16.5805 22 20 18.6 20 14.406V6.507c0-.6222-.5074-1.1267-1.1332-1.1267s-1.1333.5045-1.1333 1.1267v4.5071c0 .3111-.2537.5634-.5666.5634s-.5666-.2523-.5666-.5634V4.2535c0-.6223-.5074-1.1267-1.1333-1.1267s-1.1332.5044-1.1332 1.1267v6.1972c0 .3112-.2537.5634-.5667.5634s-.5666-.2522-.5666-.5634v-7.324c0-.6222-.5074-1.1267-1.1332-1.1267" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Hand5FingerFilledIcon);
export default createLucideIcon('Hand5FingerFilledIcon', ForwardRef);
