import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BlackHoleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.261 20.4815c-.9851 1.8294-3.761 1.1296-3.761-.9482v-7.5336c0-5.2467 4.2533-9.5 9.5-9.5 1.9992 0 3.8556.6184 5.3862 1.6735l.3529-.6553c.985-1.8294 3.7609-1.1296 3.7609.9482v7.5336c0 5.2467-4.2533 9.5-9.5 9.5-1.9992 0-3.8556-.6185-5.3862-1.6736zM12 15.4998c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BlackHoleFilledIcon);
export default createLucideIcon('BlackHoleFilledIcon', ForwardRef);
