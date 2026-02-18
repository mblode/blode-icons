import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ChevronTriangleDownSmallIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M14.4777 10.75H9.5223c-.416 0-.6501.4785-.3947.807l2.4777 3.1856c.2002.2573.5892.2573.7894 0l2.4777-3.1856c.2554-.3285.0214-.807-.3947-.807Z" /></svg>;
const ForwardRef = forwardRef(ChevronTriangleDownSmallIcon);
export default createLucideIcon('ChevronTriangleDownSmallIcon', ForwardRef);
