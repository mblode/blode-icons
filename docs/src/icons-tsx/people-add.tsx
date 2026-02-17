import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PeopleAddIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.9997 13.2499c-.6272-.1631-1.296-.2499-2-.2499-2.9785 0-5.3257 1.5539-6.5667 3.8621C4.596 18.4191 6.0272 20 7.795 20h3.2047m7-5v3m0 0v3m0-3h-3m3 0h3m-5.5-11.5c0 1.933-1.567 3.5-3.5 3.5s-3.5-1.567-3.5-3.5 1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5" /></svg>;
const ForwardRef = forwardRef(PeopleAddIcon);
export default createLucideIcon('PeopleAddIcon', ForwardRef);
