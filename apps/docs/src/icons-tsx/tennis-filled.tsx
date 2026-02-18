import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TennisFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2 12c0-2.5363.9443-4.8521 2.5004-6.615C6.613 6.825 8 9.2505 8 12s-1.387 5.175-3.4996 6.615C2.9443 16.8521 2 14.5363 2 12" /><path fill="currentColor" d="M10 12c0-3.2716-1.5711-6.1763-4-8.0007C7.6713 2.7439 9.7488 2 12 2s4.3287.7439 6 1.9993C15.5711 5.8237 14 8.7283 14 12c0 3.2716 1.5711 6.1763 4 8.0007C16.3287 21.2561 14.2512 22 12 22s-4.3287-.7439-6-1.9993c2.4289-1.8244 4-4.7291 4-8.0007" /><path fill="currentColor" d="M19.4996 5.385C21.0557 7.1479 22 9.4637 22 12s-.9443 4.8521-2.5004 6.615C17.387 17.175 16 14.7495 16 12s1.387-5.175 3.4996-6.615" /></svg>;
const ForwardRef = forwardRef(TennisFilledIcon);
export default createLucideIcon('TennisFilledIcon', ForwardRef);
