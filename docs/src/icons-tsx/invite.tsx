import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InviteIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11V6c0-1.6569 1.3431-3 3-3h8c1.6569 0 3 1.3431 3 3v5m-9-3h4M3 12.3874V17c0 1.6569 1.3431 3 3 3h12c1.6569 0 3-1.3431 3-3v-4.6126c0-.6825-.6687-1.1645-1.3162-.9487l-6.7351 2.2451a3 3 0 0 1-1.8974 0l-6.735-2.2451C3.6686 11.2229 3 11.7049 3 12.3874" /></svg>;
const ForwardRef = forwardRef(InviteIcon);
export default ForwardRef;
