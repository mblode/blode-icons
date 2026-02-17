import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Anchor2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c1.3807 0 2.5-1.1193 2.5-2.5S13.3807 3 12 3 9.5 4.1193 9.5 5.5 10.6193 8 12 8m0 0v13m6-9h3v.5c0 4.6944-3.8056 8.5-8.5 8.5H12m-6-9H3v.5c0 4.6944 3.8056 8.5 8.5 8.5h.5" /></svg>;
const ForwardRef = forwardRef(Anchor2Icon);
export default ForwardRef;
