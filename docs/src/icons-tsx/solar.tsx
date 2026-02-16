import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SolarIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.0004 16h6.382a1 1 0 0 1 .8944.5528l1 2c.3325.6649-.151 1.4472-.8944 1.4472h-7.382m0-4h-6.382a1 1 0 0 0-.8944.5528l-1 2C3.3917 19.2177 3.8752 20 4.6186 20h7.3819m0-4v4M9.1724 4c.4118 1.1652 1.523 2 2.8292 2s2.4175-.8348 2.8293-2m-2.8305 6v1m7-7h1m-16 0h1m2 4.25-.75.75m10.75-.75.75.75" /></svg>;
const ForwardRef = forwardRef(SolarIcon);
export default ForwardRef;
