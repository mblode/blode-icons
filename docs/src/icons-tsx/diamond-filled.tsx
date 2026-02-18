import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DiamondFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6.0086 3.963A4 4 0 0 1 8.6118 3h6.7804a4 4 0 0 1 2.6032.963l3.6977 3.1694c1.7691 1.5164 1.8728 4.2179.2252 5.8655l-7.0879 7.0879c-1.5621 1.5621-4.0947 1.5621-5.6568 0l-7.088-7.0879C.4382 11.3503.5419 8.6488 2.311 7.1324zm4.2005 4.7441c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L7.1484 8.9393c-.5858.5858-.5858 1.5356 0 2.1214l1.6465 1.6464c.3905.3905 1.0236.3905 1.4142 0s.3905-1.0237 0-1.4142L8.9161 10z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(DiamondFilledIcon);
export default createLucideIcon('DiamondFilledIcon', ForwardRef);
