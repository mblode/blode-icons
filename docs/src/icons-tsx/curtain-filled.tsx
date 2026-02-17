import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CurtainFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.9089 4H6C3.7909 4 2 5.791 2 8v8.0001c0 2.2091 1.7909 4 4 4h2a1 1 0 0 0 1.0001-1H15l.0003.0182a1 1 0 0 0 .9998.9818h2c2.2091 0 4-1.7909 4-4v-8c0-2.2091-1.7909-4-4-4H8.9089m7.115 2c-.111 1.9088.1649 3.2865.8147 4.3166.5931.9403 1.5761 1.7132 3.1614 2.3129V8.0001c0-1.1046-.8954-2-2-2zM20 14.9929v1.0073c0 1.1046-.8954 2-2 2h-.9206c.1494-.8065.4994-1.5095.987-2.0288.4896-.5213 1.1388-.8824 1.9336-.9785M6.9206 18.0001c-.1494-.8065-.4994-1.5095-.987-2.0288C5.444 15.45 4.7948 15.0889 4 14.9928v1.0073c0 1.1046.8954 2 2 2zM4 12.6295V8.0001c0-1.1046.8954-2 2-2h1.9761c.111 1.9087-.165 3.2864-.8147 4.3165-.5931.9403-1.576 1.7132-3.1614 2.3129" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CurtainFilledIcon);
export default createLucideIcon('CurtainFilledIcon', ForwardRef);
