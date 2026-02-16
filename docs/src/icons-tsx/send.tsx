import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SendIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.5916 20.8249c.4116 1.4407 2.4485 1.4541 2.879.0189l4.4777-14.9256c.3432-1.1442-.7236-2.211-1.8678-1.8677L3.1549 8.5282c-1.4351.4305-1.4217 2.4674.019 2.879l6.5236 1.8639a1.5 1.5 0 0 1 1.0302 1.0302z" /></svg>;
const ForwardRef = forwardRef(SendIcon);
export default ForwardRef;
