import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BoltIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M13.1981 20.0571c-1.4655 0-2.9045-.5319-3.7305-1.6754l-.2914 1.3487-5.3793 2.852.5807-2.852L8.2951 2h4.7965l-1.3857 6.2495c1.1192-1.2233 2.1584-1.6754 3.4908-1.6754 2.8779 0 4.7964 1.8882 4.7964 5.3453 0 3.5636-2.2116 8.1377-6.795 8.1377m1.8387-7.127c0 1.6487-1.1725 2.8986-2.6913 2.8986-.8528 0-1.6255-.3191-2.1318-.8776l.7461-3.2709c.5596-.5586 1.1991-.8777 1.9452-.8777 1.1459 0 2.1318.8511 2.1318 2.1276" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BoltIcon);
export default createLucideIcon('BoltIcon', ForwardRef);
