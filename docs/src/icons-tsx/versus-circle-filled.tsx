import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VersusCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10m-9.5001-2c0-1.0493.8507-1.9 1.9-1.9h1.5c1.0493 0 1.9.8507 1.9 1.9a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.1.1 0 0 0-.1-.1h-1.5a.1.1 0 0 0-.1.1v1a.1.1 0 0 0 .1.1h1.5c1.0493 0 1.9.8507 1.9 1.9v1c0 1.0493-.8507 1.9-1.9 1.9h-1.5c-1.0493 0-1.9-.8507-1.9-1.9a.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9.1.1 0 0 0 .1.1h1.5a.1.1 0 0 0 .1-.1v-1a.1.1 0 0 0-.1-.1h-1.5c-1.0493 0-1.9-.8507-1.9-1.9zM7.8731 8.7817a.9.9 0 0 0-1.7462.4366l1.5 6A.9.9 0 0 0 8.5 15.9h1a.9.9 0 0 0 .8731-.6817l1.5-6a.9.9 0 1 0-1.7462-.4366L9 13.2892z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(VersusCircleFilledIcon);
export default createLucideIcon('VersusCircleFilledIcon', ForwardRef);
