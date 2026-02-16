import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HistoryIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5v4h4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.5117 15c1.2355 3.4956 4.5692 6 8.4879 6 4.9706 0 9-4.0294 9-9s-4.0294-9-9-9C8.2705 3 5.071 5.268 3.7056 8.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" /></svg>;
const ForwardRef = forwardRef(HistoryIcon);
export default ForwardRef;
