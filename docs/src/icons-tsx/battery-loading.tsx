import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BatteryLoadingIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 15h1.5c.8284 0 1.5-.6716 1.5-1.5v-3c0-.8284-.6716-1.5-1.5-1.5H19zm0 0V8.5C19 7.1193 17.8807 6 16.5 6m2.5 9c0 1.6569-1.3431 3-3 3h-2M7 6H5C3.3432 6 2 7.3431 2 9v6.5C2 16.8807 3.1193 18 4.5 18M12 6l-4.5 6h6L9 18" /></svg>;
const ForwardRef = forwardRef(BatteryLoadingIcon);
export default ForwardRef;
