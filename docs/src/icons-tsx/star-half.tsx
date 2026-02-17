import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StarHalfIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3.0009c-.3815.021-.7534.2306-.9452.6286l-2.015 4.1812c-.1631.3383-.488.572-.8632.621l-4.639.6054c-.9326.1217-1.306 1.2596-.6238 1.9008l3.3936 3.1896c.2745.2581.3986.6361.3297 1.0047l-.852 4.5554c-.1712.9158.8064 1.619 1.6331 1.1748l4.1124-2.21A1.13 1.13 0 0 1 12 18.5201" /></svg>;
const ForwardRef = forwardRef(StarHalfIcon);
export default ForwardRef;
