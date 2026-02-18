import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Paperclip1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M6 11v4c0 3.3137 2.6863 6 6 6s6-2.6863 6-6V7c0-2.2091-1.7909-4-4-4s-4 1.7909-4 4v8c0 1.1046.8954 2 2 2s2-.8954 2-2V7" /></svg>;
const ForwardRef = forwardRef(Paperclip1Icon);
export default createLucideIcon('Paperclip1Icon', ForwardRef);
