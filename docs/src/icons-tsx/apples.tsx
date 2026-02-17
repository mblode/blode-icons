import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ApplesIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.0323 2.5c1.8532.977 2.7191 2.4047 2.9668 4.505m0 0c-11.866-5.0056-9.3936 17.5198-.0002 13.5152 9.396 4.0046 11.8688-18.5208.0002-13.5151" /></svg>;
const ForwardRef = forwardRef(ApplesIcon);
export default ForwardRef;
