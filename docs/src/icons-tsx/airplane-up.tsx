import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirplaneUpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.0328 7.0446 2 7.4188l2.3064 3.3987-.2476.5284a2 2 0 0 0-.0718 1.5227l.0745.208c.3779 1.0555 1.5494 1.5942 2.5967 1.1941l3.5918-1.3721.0905 1.2996c.0462.6627.7137 1.097 1.3382.8708l.6749-.2445a3 3 0 0 0 1.4409-1.1074l1.9555-2.811 4.2399-1.536a1.9569 1.9569 0 0 0-.1952-3.739l-1.9436-.4823a2 2 0 0 0-1.1804.067c-1.6073.5996-6.1317 2.2853-8.0698 2.9874a2.007 2.007 0 0 1-1.689-.15l-1.3537-.784a3 3 0 0 0-2.5254-.2246M3 19h18" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AirplaneUpIcon);
export default createLucideIcon('AirplaneUpIcon', ForwardRef);
