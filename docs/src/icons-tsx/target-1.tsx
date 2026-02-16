import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Target1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M12 7v2.5m2.5 2.5H17m-5 2.5V17m-5-5h2.5m2.5 9c-4.9706 0-9-4.0294-9-9s4.0294-9 9-9 9 4.0294 9 9-4.0294 9-9 9Z" /></svg>;
const ForwardRef = forwardRef(Target1Icon);
export default ForwardRef;
