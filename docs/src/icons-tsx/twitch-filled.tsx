import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TwitchFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.5421 6.6072h-1.5417v4.6071h1.5417zM17.3962 11.2143V6.6072h-1.5416v4.6071z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M6.6042 2 2.75 5.8393v13.8214h4.625V23.5l3.8542-3.8393h3.0833L21.25 12.75V2zm10.0227 13.0536 3.0834-3.0715V3.5357H7.3769v11.5179h3.0834v3.0714l3.0833-3.0714z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TwitchFilledIcon);
export default ForwardRef;
