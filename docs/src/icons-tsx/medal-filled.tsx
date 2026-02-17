import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MedalFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 9c0-4.4183 3.5817-8 8-8s8 3.5817 8 8c0 2.5264-1.1711 4.7793-3 6.2454v5.3854c0 1.4868-1.5646 2.4538-2.8944 1.7889L12 21.3669l-2.1056 1.0528C8.5646 23.0846 7 22.1176 7 20.6308v-5.3854C5.171 13.7793 4 11.5264 4 9m5 7.4185v4.2123l2.1056-1.0528a2 2 0 0 1 1.7888 0L15 20.6308v-4.2123c-.9264.375-1.9391.5815-3 .5815s-2.0736-.2065-3-.5815" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MedalFilledIcon);
export default createLucideIcon('MedalFilledIcon', ForwardRef);
