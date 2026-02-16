import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TelescopeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M15.0343 4.5278c-1.038.3778-1.5732 1.5255-1.1954 2.5634l1.8811 5.1683c.3778 1.038 1.5255 1.5732 2.5635 1.1954l3.7587-1.3681c1.038-.3778 1.5732-1.5255 1.1954-2.5634L21.3565 4.355c-.3778-1.038-1.5255-1.5731-2.5635-1.1954zM6.9624 10.1263c-.2834-.7785.118-1.6393.8965-1.9226l4.2286-1.539 2.5651 7.0476-2.6535.9658v4.3218h2c.5523 0 1 .4478 1 1s-.4477 1-1 1h-6c-.5522 0-1-.4477-1-1s.4478-1 1-1h2v-3.6602c-.645.0382-1.2654-.3466-1.4977-.9848z" /><path fill="currentColor" d="M1.3673 13.7587c-.3778-1.0379.1573-2.1856 1.1953-2.5634l2.819-1.0261 1.8812 5.1683-2.819 1.0261c-1.038.3778-2.1857-.1574-2.5635-1.1953z" /></svg>;
const ForwardRef = forwardRef(TelescopeFilledIcon);
export default ForwardRef;
