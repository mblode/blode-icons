import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PlaygroundIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M17.4443 17c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3 3 1.3431 3 3ZM4.703 7.132l5.3074 4.4533L3.5 13.9549zM14.0473 6.1648c.3573-1.3336 1.7281-2.1251 3.0618-1.7677l.9659.2588c1.3337.3573 2.1252 1.7282 1.7678 3.0618l-.2588.966c-.3574 1.3336-1.7282 2.1251-3.0619 1.7677l-.9659-.2588c-1.3337-.3574-2.1251-1.7282-1.7678-3.0619z" /></svg>;
const ForwardRef = forwardRef(PlaygroundIcon);
export default createLucideIcon('PlaygroundIcon', ForwardRef);
