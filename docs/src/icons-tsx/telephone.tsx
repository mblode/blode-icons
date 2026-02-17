import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TelephoneIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M9.8292 5.6584A3 3 0 0 0 7.1459 4H6c-1.1046 0-2 .8954-2 2 0 7.732 6.268 14 14 14 1.1046 0 2-.8954 2-2v-1.1459a3 3 0 0 0-1.6584-2.6833l-1.3507-.6754a1.537 1.537 0 0 0-1.7742.2879c-.4348.4348-1.0923.5785-1.6409.3009-1.6649-.8427-2.8173-1.9951-3.66-3.66-.2776-.5486-.134-1.206.3009-1.6409a1.537 1.537 0 0 0 .2879-1.7742z" /></svg>;
const ForwardRef = forwardRef(TelephoneIcon);
export default createLucideIcon('TelephoneIcon', ForwardRef);
