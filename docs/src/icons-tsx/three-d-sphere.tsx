import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ThreeDSphereIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M21 12c0 4.9706-4.0294 9-9 9m9-9c0-4.9706-4.0294-9-9-9m9 9c0 1.6569-4.0294 3-9 3s-9-1.3431-9-3m9 9c-4.9706 0-9-4.0294-9-9m9 9c-1.6569 0-3-4.0294-3-9s1.3431-9 3-9m-9 9c0-4.9706 4.0294-9 9-9" /></svg>;
const ForwardRef = forwardRef(ThreeDSphereIcon);
export default ForwardRef;
