import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TeacherWhiteboardIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h15M3 5v12M3 5H2m16 0h1m-1 0v1M3 17H2m1 0h6m1.5-12V4m8.5 8c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2m-2 4.5c-1.8102 0-3.3472 1.0089-3.9705 2.4351-.2369.5423.2341 1.0649.8258 1.0649h6.2894c.5917 0 1.0628-.5226.8258-1.0649C20.3472 17.5089 18.8102 16.5 17 16.5" /></svg>;
const ForwardRef = forwardRef(TeacherWhiteboardIcon);
export default ForwardRef;
