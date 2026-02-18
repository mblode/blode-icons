import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudCheckFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7 20c-3.3137 0-6-2.6863-6-6 0-2.658 1.7283-4.9123 4.1224-5.7004.296-.0974.5457-.3042.692-.5794C6.9903 5.507 9.319 4 12 4s5.0097 1.507 6.1856 3.7202c.1463.2752.396.482.692.5794C21.2717 9.0877 23 11.342 23 14c0 3.3137-2.6863 6-6 6zm8.6579-8.8859a.9.9 0 1 0-1.3158-1.2282l-4.0088 4.2951-1.6753-1.7951a.9.9 0 0 0-1.272-.0438.9.9 0 0 0-.044 1.272l2.3334 2.5a.9.9 0 0 0 1.3159 0z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CloudCheckFilledIcon);
export default createLucideIcon('CloudCheckFilledIcon', ForwardRef);
