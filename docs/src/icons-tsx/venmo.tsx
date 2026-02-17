import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VenmoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M19.7658 2.5c.6784 1.1106.9842 2.2546.9842 3.6996 0 4.6089-3.9693 10.5962-7.1908 14.8004H6.201L3.25 3.5091l6.4429-.6063 1.5602 12.4459C12.711 12.9945 14.51 9.2949 14.51 6.7726c0-1.3806-.2386-2.321-.6115-3.0953z" /></svg>;
const ForwardRef = forwardRef(VenmoIcon);
export default ForwardRef;
