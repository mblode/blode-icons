import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Heart2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M12 5.7684C18.1619-.4819 28.7252 11.1257 12 20.5-4.7252 11.1257 5.838-.4818 12 5.7684Z" /></svg>;
const ForwardRef = forwardRef(Heart2Icon);
export default createLucideIcon('Heart2Icon', ForwardRef);
