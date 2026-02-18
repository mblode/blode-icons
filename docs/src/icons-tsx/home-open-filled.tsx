import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HomeOpenFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.6861 2.8346c-1.5243-1.3814-3.8479-1.3814-5.3722 0l-5 4.5313A4 4 0 0 0 3 10.3298v6.6701c0 2.2092 1.7909 4 4 4h1c1.1046 0 2-.8954 2-2v-3c0-1.1045.8954-2 2-2s2 .8955 2 2v3c0 1.1046.8954 2 2 2h1c2.2091 0 4-1.7908 4-4v-6.6701a4 4 0 0 0-1.3139-2.964z" /></svg>;
const ForwardRef = forwardRef(HomeOpenFilledIcon);
export default createLucideIcon('HomeOpenFilledIcon', ForwardRef);
