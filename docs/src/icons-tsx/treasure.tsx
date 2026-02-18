import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TreasureIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 5H7C4.7909 5 3 6.7909 3 9v8c0 1.1046.8954 2 2 2h14c1.1046 0 2-.8954 2-2V9c0-2.2091-1.7909-4-4-4M3 11h18M8 5v14M16 5v14M12 10v2" /></svg>;
const ForwardRef = forwardRef(TreasureIcon);
export default createLucideIcon('TreasureIcon', ForwardRef);
