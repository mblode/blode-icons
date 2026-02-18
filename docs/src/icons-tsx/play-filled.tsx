import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PlayFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.1967 2.7184C8.5368.9704 5 2.8784 5 6.0612v11.8776c0 3.1828 3.5368 5.0907 6.1967 3.3428l9.0373-5.9388c2.4044-1.58 2.4044-5.1056 0-6.6856z" /></svg>;
const ForwardRef = forwardRef(PlayFilledIcon);
export default createLucideIcon('PlayFilledIcon', ForwardRef);
