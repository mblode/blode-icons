import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Paperclip3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m12.2062 10.7976-4.978 4.9804c-.5498.5501-.5498 1.442 0 1.9921.55.5501 1.4414.5501 1.9912 0l9.9558-9.9607c.5498-.55.8247-1.271.8248-1.992s-.2749-1.442-.8248-1.9922A2.806 2.806 0 0 0 17.1841 3c-.7207 0-1.4413.275-1.9912.8252l-9.9558 9.9606C4.4123 14.6111 4 15.6927 4 16.7742s.4124 2.1629 1.2371 2.988C6.062 20.5874 7.143 21 8.224 21s2.1619-.4126 2.9867-1.2378l4.9779-4.9803" /></svg>;
const ForwardRef = forwardRef(Paperclip3Icon);
export default createLucideIcon('Paperclip3Icon', ForwardRef);
