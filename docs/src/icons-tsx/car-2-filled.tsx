import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.4142 5.1716A4 4 0 0 1 8.2426 4H12.5a4 4 0 0 1 3.2 1.6l1.4123 1.883a2 2 0 0 0 1.2078.7612l1.4644.2929C21.6542 8.911 23 10.5527 23 12.4594V15c0 1.6014-1.2547 2.9097-2.8347 2.9955C19.6045 19.1804 18.398 20 17 20c-1.3962 0-2.6015-.8175-3.1632-2h-3.6736C9.6015 19.1825 8.3962 20 7 20c-1.4232 0-2.648-.8495-3.195-2.069C2.205 17.6086 1 16.195 1 14.5v-3.2574a4 4 0 0 1 1.1716-2.8284zM7 15c-.8284 0-1.5.6716-1.5 1.5S6.1716 18 7 18s1.5-.6716 1.5-1.5S7.8284 15 7 15m10 0c-.8284 0-1.5.6716-1.5 1.5S16.1716 18 17 18s1.5-.6716 1.5-1.5S17.8284 15 17 15" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Car2FilledIcon);
export default ForwardRef;
