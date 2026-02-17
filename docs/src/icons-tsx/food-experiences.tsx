import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FoodExperiencesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.4 4.5h.2m.4 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M12 19c6 0 8-3 8-3H4s2 3 8 3M10 20h4M14.8333 6.8333 16.25 4l1.4167 2.8333L20.5 8.25l-2.8333 1.4167L16.25 12.5l-1.4167-2.8333L12 8.25z" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M5.6356 8.9648 6 8.2361l.3644.7287a1.5 1.5 0 0 0 .6708.6708L7.7639 10l-.7287.3644a1.5 1.5 0 0 0-.6708.6708L6 11.7639l-.3644-.7287a1.5 1.5 0 0 0-.6708-.6708L4.2361 10l.7287-.3644a1.5 1.5 0 0 0 .6708-.6708Zm.8116-1.6232-.0002.0006.0002-.0006L6 7.118z" /></svg>;
const ForwardRef = forwardRef(FoodExperiencesIcon);
export default ForwardRef;
