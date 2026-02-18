import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileArrowRight2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12V9.8284a2 2 0 0 0-.5858-1.4142l-4.8284-4.8284A2 2 0 0 0 12.1716 3H7c-1.1046 0-2 .8954-2 2v14c0 1.1046.8954 2 2 2h1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 4v3c0 1.1046.8954 2 2 2h3M13 19h6M17 16l3 3-3 3" /></svg>;
const ForwardRef = forwardRef(FileArrowRight2Icon);
export default createLucideIcon('FileArrowRight2Icon', ForwardRef);
