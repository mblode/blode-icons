import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DebuggerIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9.0313 6.688.6238-2.9345c.1148-.5402.6458-.885 1.186-.7703l1.9563.4159c.5403.1148.8851.6458.7703 1.186l-.6238 2.9345m-3.9126-.8317 3.9126.8317m-3.9126-.8317c-1.6206-.3445-3.2136.69-3.5581 2.3107l-1.5594 7.3361c-.3445 1.6207.69 3.2137 2.3107 3.5582l3.9126.8317c1.6207.3444 3.2137-.6901 3.5582-2.3108l1.5593-7.3361c.3445-1.6206-.69-3.2137-2.3107-3.5581m-4.515 4.4075 1.1553 1.7791m0 0 1.1554 1.7791m-1.1554-1.7791 1.7791-1.1553m-1.779 1.1553L7.805 14.8616" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M16.5 5h.01M19 3.75h.01M21.5 2.5h.01M21.5 5h.01m-.01 2.5h.01M19 6.25h.01" /></svg>;
const ForwardRef = forwardRef(DebuggerIcon);
export default ForwardRef;
