import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PeopleEditFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.5 22a.5.5 0 0 1-.5-.5v-.7574a3 3 0 0 1 .8787-2.1213L18.75 14.75c.6904-.6904 1.8096-.6904 2.5 0s.6904 1.8096 0 2.5l-3.8713 3.8713A3 3 0 0 1 15.2574 22zM4.5527 16.3886C5.9627 13.7661 8.6424 12 12 12c1.954 0 3.6785.5981 5.0566 1.615l-3.5922 3.5923A5 5 0 0 0 12 20.7428V21H7.7954c-1.1716 0-2.264-.521-2.9372-1.3586-.6976-.8677-.9347-2.0825-.3055-3.2528M12 2C9.5147 2 7.5 4.0147 7.5 6.5S9.5147 11 12 11s4.5-2.0147 4.5-4.5S14.4853 2 12 2" /></svg>;
const ForwardRef = forwardRef(PeopleEditFilledIcon);
export default createLucideIcon('PeopleEditFilledIcon', ForwardRef);
