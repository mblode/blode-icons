import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CoinPoundsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.2468 7.7116A2.492 2.492 0 0 0 12.5 7C11.1193 7 10 8.1193 10 9.5c0 1.0862.6189 1.8559.8829 2.5M14 16H9l2-3.5c0-.16-.0455-.3254-.1171-.5m0 0H9m1.8829 0H14" /></svg>;
const ForwardRef = forwardRef(CoinPoundsIcon);
export default ForwardRef;
