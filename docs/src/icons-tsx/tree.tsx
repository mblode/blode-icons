import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TreeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21v-6m0 0-2-2m2 2 3-3m5-1c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8 8 3.5817 8 8" /></svg>;
const ForwardRef = forwardRef(TreeIcon);
export default ForwardRef;
