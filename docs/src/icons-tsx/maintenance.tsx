import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MaintenanceIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M14.5 16c3.5899 0 6.5-2.9101 6.5-6.5a6.49 6.49 0 0 0-.3604-2.1396L18 10c-1.1046 1.1046-2.8954 1.1046-4 0s-1.1046-2.8954 0-4l2.6396-2.6396A6.49 6.49 0 0 0 14.5 3C10.9101 3 8 5.9101 8 9.5c0 .8864.1774 1.7314.4987 2.5013L3.75 16.75c-.9665.9665-.9665 2.5335 0 3.5s2.5335.9665 3.5 0l4.7487-4.7487c.7699.3213 1.6149.4987 2.5013.4987Z" /></svg>;
const ForwardRef = forwardRef(MaintenanceIcon);
export default ForwardRef;
