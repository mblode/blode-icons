import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowTriangleTopIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M17.0021 19H6.9979c-1.4833 0-2.448-1.5615-1.7847-2.8887l5.0022-10.008c.7353-1.471 2.8339-1.471 3.5692 0l5.0022 10.008C19.4501 17.4385 18.4854 19 17.0021 19Z" /></svg>;
const ForwardRef = forwardRef(ArrowTriangleTopIcon);
export default ForwardRef;
