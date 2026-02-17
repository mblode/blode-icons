import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MegaphoneFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.7831 3.2913c2.5798-.821 5.213 1.1043 5.213 3.8117v.023c1.7252.444 3 2.0101 3 3.874 0 1.8638-1.2748 3.4299-3 3.874v.023c0 2.7073-2.6332 4.6326-5.213 3.8116l-.1477-.047C13.0049 20.0403 11.6137 21 9.9961 21c-2.2091 0-4-1.7909-4-4v-.7789l-1.2158-.3879c-1.6584-.5291-2.7842-2.07-2.7842-3.8108V9.9775c0-1.7407 1.1258-3.2816 2.7842-3.8107l1.7916-.5716a1 1 0 0 1 .1448-.055zM7.9961 16.867V17c0 1.1045.8954 2 2 2 .72 0 1.3528-.3809 1.7052-.9539zm12-5.8669c0 .7403-.4022 1.3866-1 1.7324V9.2675c.5978.3458 1 .9922 1 1.7325M5.9983 7.8775v6.2449l-.6101-.1946a2 2 0 0 1-1.3921-1.9054V9.9775a2 2 0 0 1 1.392-1.9053z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MegaphoneFilledIcon);
export default createLucideIcon('MegaphoneFilledIcon', ForwardRef);
