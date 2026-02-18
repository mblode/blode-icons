import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AnimationOvershootIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.0165 20S3.517 1.7649 8.0123 4.229 14.5057 7.186 20 7.186" /></svg>;
const ForwardRef = forwardRef(AnimationOvershootIcon);
export default createLucideIcon('AnimationOvershootIcon', ForwardRef);
