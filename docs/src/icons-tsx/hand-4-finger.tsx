import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Hand4FingerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8V7c0-1.1046.8954-2 2-2s2 .8954 2 2v6.8292m0 0V11m0 2.8292C20 17.7895 16.7895 21 12.8292 21a7.171 7.171 0 0 1-6.3455-3.831L3.5 11.5l.7506-.9383c.69-.8625 1.9486-1.0023 2.8111-.3123L8 11V6c0-1.1046.8954-2 2-2s2 .8954 2 2v4m0-2V5c0-1.1046.8954-2 2-2s2 .8954 2 2v6" /></svg>;
const ForwardRef = forwardRef(Hand4FingerIcon);
export default ForwardRef;
