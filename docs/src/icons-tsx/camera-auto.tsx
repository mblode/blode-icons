import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CameraAutoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.8182 14.5 12 10.5l-1.8182 4m3.6364 0L14.5 16m-.6818-1.5h-3.6364m0 0L9.5 16M3 9.9313V17c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3V9.9312C21 8.3124 19.6876 7 18.0688 7a2.931 2.931 0 0 1-2.439-1.3053l-.2392-.3588A3 3 0 0 0 12.8944 4h-1.7888a3 3 0 0 0-2.4962 1.3359l-.2392.3588A2.931 2.931 0 0 1 5.9312 7C4.3125 7 3 8.3124 3 9.9313" /></svg>;
const ForwardRef = forwardRef(CameraAutoIcon);
export default ForwardRef;
