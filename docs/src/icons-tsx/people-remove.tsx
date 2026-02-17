import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PeopleRemoveIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.9997 20H7.7949c-1.7677 0-3.199-1.5809-2.3619-3.1379C6.674 14.5539 9.0212 13 11.9997 13c.3419 0 .6754.0205 1 .0602m7 2.9398-2 2m0 0-2 2m2-2-2-2m2 2 2 2m-4.5-13.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5" /></svg>;
const ForwardRef = forwardRef(PeopleRemoveIcon);
export default createLucideIcon('PeopleRemoveIcon', ForwardRef);
