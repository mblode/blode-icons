import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LovableFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.5509 2.19c3.0657 0 5.5509 2.4918 5.5509 5.5655v2.1153h1.8473c3.0658 0 5.5509 2.4918 5.5509 5.5655s-2.4851 5.5655-5.5509 5.5655H3V7.7555C3 4.6818 5.4852 2.19 8.5509 2.19" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(LovableFilledIcon);
export default ForwardRef;
