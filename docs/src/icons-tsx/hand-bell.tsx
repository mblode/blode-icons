import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HandBellIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M8.2505 19.2734c-.973.9732-2.5508.9732-3.524 0-.973-.9731-.973-2.5508 0-3.5239m8.0162-6.5656 4.0886-5.281c.8585-1.1089 2.4952-1.2126 3.4868-.221s.8879 2.6283-.221 3.4868l-5.281 4.0886m-2.0734-2.0734a4.22 4.22 0 0 1 1.2213.8521c.3645.3645.6485.7789.8521 1.2213m-2.0734-2.0734c-1.562-.7189-3.472-.4349-4.759.8521L6.695 11.3247a2.407 2.407 0 0 1-1.7015.7048h-.584a.997.997 0 0 0-.7047.2919c-.3893.3892-.3893 1.0203 0 1.4096l6.5642 6.5642c.3893.3893 1.0204.3893 1.4096 0a.997.997 0 0 0 .2919-.7048v-.5839c0-.6381.2536-1.2502.7048-1.7015l1.2887-1.2886c1.287-1.287 1.571-3.1971.8521-4.7591" /></svg>;
const ForwardRef = forwardRef(HandBellIcon);
export default ForwardRef;
