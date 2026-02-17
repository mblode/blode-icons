import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LightbulbSimpleIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M12 3c-3.866 0-7 3.134-7 7 0 2.5463 1.3596 4.7751 3.3924 6 .361.2175.6076.5949.6076 1.0163V19c0 1.6569 1.3431 3 3 3s3-1.3431 3-3v-1.9837c0-.4214.2466-.7988.6076-1.0163C17.6404 14.7751 19 12.5463 19 10c0-3.866-3.134-7-7-7Z" /><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="M15 18H9" /></svg>;
const ForwardRef = forwardRef(LightbulbSimpleIcon);
export default createLucideIcon('LightbulbSimpleIcon', ForwardRef);
