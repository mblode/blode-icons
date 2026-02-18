import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PackageDelivery1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 7c0-1.1046.8954-2 2-2h1v3c0 1.1046.8954 2 2 2h4c1.1046 0 2-.8954 2-2V5h1c1.1046 0 2 .8954 2 2v2c0 .5523.4477 1 1 1s1-.4477 1-1V7c0-2.2091-1.7909-4-4-4H7C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h5c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2z" /><path fill="currentColor" d="M21.0706 13.4144c-1.5621-1.5621-4.0947-1.5621-5.6568 0s-1.5621 4.0947 0 5.6568l2.1213 2.1213c.3905.3906 1.0237.3906 1.4142 0l2.1213-2.1213c1.5621-1.5621 1.5621-4.0947 0-5.6568" /></svg>;
const ForwardRef = forwardRef(PackageDelivery1FilledIcon);
export default createLucideIcon('PackageDelivery1FilledIcon', ForwardRef);
