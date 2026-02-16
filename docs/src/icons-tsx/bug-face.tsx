import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BugFaceIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4.75S4.4615 3 6.077 3C8.6152 3 9.5383 7 10 9m10-4.25S19.5385 3 17.9231 3C15.3847 3 14.4615 7 14 9m6 4.5c0 4.1421-3.5817 7.5-8 7.5s-8-3.3579-8-7.5S7.5817 6 12 6s8 3.3579 8 7.5" /><path fill="currentColor" d="M10.5 13.75c0 .9665-.6716 1.75-1.5 1.75s-1.5-.7835-1.5-1.75S8.1716 12 9 12s1.5.7835 1.5 1.75M13.5 17c0 .5523-.6716 1-1.5 1s-1.5-.4477-1.5-1 .6716-1 1.5-1 1.5.4477 1.5 1M16.5 13.75c0 .9665-.6716 1.75-1.5 1.75s-1.5-.7835-1.5-1.75S14.1716 12 15 12s1.5.7835 1.5 1.75" /></svg>;
const ForwardRef = forwardRef(BugFaceIcon);
export default ForwardRef;
