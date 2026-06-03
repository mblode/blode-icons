import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FacebookMessengerFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12.001 2.199c5.633 0 10.0009 4.1303 10.001 9.7032s-4.368 9.7007-10.001 9.7007c-1.0126 0-1.9827-.135-2.8953-.385-.1775-.0475-.3676-.035-.535.04l-1.9852.875a.8003.8003 0 0 1-1.1227-.7075l-.055-1.7801c-.005-.2201-.105-.4251-.2675-.5701C3.1951 17.3351 2 14.8149 2 11.8997 2 6.3268 6.368 2.199 12.001 2.199m6.0081 7.4656c.28-.4476-.27-.9526-.6901-.6326l-3.1553 2.3952a.6004.6004 0 0 1-.7225.0025L11.1034 9.677a1.5 1.5 0 0 0-1.7423-.0423 1.5 1.5 0 0 0-.4279.4424l-2.9378 4.6603c-.2825.4475.2676.9501.6876.6301l3.1553-2.3952a.6.6 0 0 1 .7226-.0025l2.3377 1.7526a1.502 1.502 0 0 0 1.1728.2758 1.5 1.5 0 0 0 .9974-.6758z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(FacebookMessengerFilledIcon);
export default createLucideIcon('FacebookMessengerFilledIcon', ForwardRef);
