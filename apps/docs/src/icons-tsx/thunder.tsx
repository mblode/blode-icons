import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThunderIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M19.0037 9.9869h-6.0093L15.466 2.325c.3357-1.0409-.9798-1.7994-1.693-.9761L4.2487 12.3429c-.5636.6506-.1072 1.6702.7476 1.6702h6.0093L8.534 21.6749c-.3358 1.0409.9798 1.7994 1.693.9761l9.5243-10.9939c.5636-.6506.1072-1.6702-.7476-1.6702Z" /></svg>;
const ForwardRef = forwardRef(ThunderIcon);
export default createLucideIcon('ThunderIcon', ForwardRef);
