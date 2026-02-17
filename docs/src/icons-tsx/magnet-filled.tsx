import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MagnetFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M18.9994 2.0024c1.6555 0 2.9975 1.342 2.9975 2.9975s-1.342 2.9975-2.9975 2.9975S16.0019 6.6554 16.0019 5s1.3421-2.9975 2.9975-2.9975M20.0019 5c0-.5536-.4488-1.0025-1.0025-1.0025S17.9969 4.4463 17.9969 5c0 .5537.4489 1.0025 1.0025 1.0025.5537 0 1.0025-.4488 1.0025-1.0025M8.7638 5.3398c1.073-1.073 2.8126-1.073 3.8855 0 1.073 1.073 1.073 2.8125 0 3.8855L8.937 12.9376a1.497 1.497 0 0 0-.4381.9858 1.499 1.499 0 0 0 .4381 1.139c.5868.5867 1.5381.5867 2.1249 0l2.1213-2.1213.0072-.0072 1.5838-1.5837c1.073-1.073 2.8126-1.073 3.8855 0 1.073 1.0729 1.073 2.8126 0 3.8855l-3.7123 3.7123c-1.3661 1.3662-3.1587 2.0496-4.948 2.0496-1.7892 0-3.5818-.6834-4.948-2.0496-1.3676-1.3677-2.0508-3.1607-2.0494-4.9532.0013-1.7891.6844-3.5778 2.0495-4.9428l2.1213-2.1214.0108-.0106zm7.5996 9.3709.8857-.8857a.7526.7526 0 0 0 0-1.0642.7526.7526 0 0 0-1.0642 0l-.8856.8857zm-6.0103-6.0105L9.2889 7.636l.8856-.8856a.7525.7525 0 0 1 1.0642 1.0642z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MagnetFilledIcon);
export default createLucideIcon('MagnetFilledIcon', ForwardRef);
