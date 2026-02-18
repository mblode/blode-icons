import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HomeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M4 10.2847c0-.8393 0-1.259.106-1.647a3 3 0 0 1 .4557-.9576c.2344-.3269.56-.5915 1.2115-1.1208l3.2-2.6c1.0789-.8766 1.6184-1.315 2.2181-1.4828a3 3 0 0 1 1.6174 0c.5997.1678 1.1392.6062 2.2181 1.4828l3.2 2.6c.6514.5293.9771.7939 1.2115 1.1208a3 3 0 0 1 .4558.9576c.1059.388.1059.8077.1059 1.647V15.2c0 1.6802 0 2.5202-.327 3.162a3 3 0 0 1-1.311 1.311C17.7202 20 16.8802 20 15.2 20H8.8c-1.6802 0-2.5202 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 17.7202 4 16.8802 4 15.2z" /></svg>;
const ForwardRef = forwardRef(HomeIcon);
export default createLucideIcon('HomeIcon', ForwardRef);
