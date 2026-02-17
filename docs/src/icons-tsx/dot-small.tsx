import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DotSmallIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={12} r={1} fill="currentColor" /></svg>;
const ForwardRef = forwardRef(DotSmallIcon);
export default ForwardRef;
