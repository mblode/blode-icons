import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PeopleVersusIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12.5c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2M16.852 17c-1.8642 0-3.2648 1.2229-3.7922 2.9302-.1732.5606.297 1.0698.8838 1.0698h5.8168c.5868 0 1.057-.5092.8838-1.0698C20.1167 18.2229 18.7162 17 16.852 17M9 5c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2M8.9992 10.141C8.3952 9.7343 7.668 9.5 6.852 9.5c-1.8642 0-3.2648 1.2229-3.7922 2.9302-.1732.5606.297 1.0698.8838 1.0698h4.0556M8.5 21l7-18" /></svg>;
const ForwardRef = forwardRef(PeopleVersusIcon);
export default createLucideIcon('PeopleVersusIcon', ForwardRef);
