import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HandBellFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M19.611 4.389c-.5656-.5656-1.4993-.5065-1.989.126L14.2117 8.92a5.28 5.28 0 0 1 .8682.8683l4.405-3.4103c.6326-.4897.6917-1.4234.1261-1.989m-3.6057 7.2122 4.704-3.6418c1.5852-1.2272 1.7335-3.567.3159-4.9846s-3.7574-1.2693-4.9846.316l-3.6418 4.7039c-1.7616-.4973-3.7343-.0538-5.1223 1.3342l-1.2887 1.2887a1.407 1.407 0 0 1-.9944.4119h-.5838a1.997 1.997 0 0 0-1.412.5848c-.7797.7798-.7797 2.044 0 2.8238l.8218.8217c-1.16 1.372-1.0933 3.4274.2 4.7208 1.2934 1.2933 3.3489 1.36 4.7208.2l.8217.8217c.7798.7798 2.044.7798 2.8238 0a1.996 1.996 0 0 0 .5848-1.4119v-.5838c0-.373.1482-.7307.4119-.9945l1.2887-1.2886c1.388-1.388 1.8315-3.3607 1.3342-5.1223M7.314 18.7544 5.2456 16.686c-.3858.5795-.323 1.3692.188 1.8803.5112.5112 1.301.5739 1.8804.1881" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(HandBellFilledIcon);
export default createLucideIcon('HandBellFilledIcon', ForwardRef);
