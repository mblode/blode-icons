import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShovelIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12.5868 15.5859-4.1716-4.1715c-.781-.7811-2.0589-.7893-2.792.0369-2.4903 2.806-3.4073 5.1934-2.1221 9.0489 3.8554 1.2851 6.2427.3681 9.0487-2.1222.8262-.7332.818-2.011.037-2.7921M8.5 15.5l7-7M15.5003 4.4998l1.2928-1.2928c.3906-.3906 1.0237-.3906 1.4143 0l2.5857 2.5857c.3906.3906.3906 1.0237.0001 1.4143l-1.2929 1.2928c-1.1046 1.1046-2.8954 1.1046-4 0s-1.1046-2.8954 0-4" /></svg>;
const ForwardRef = forwardRef(ShovelIcon);
export default createLucideIcon('ShovelIcon', ForwardRef);
