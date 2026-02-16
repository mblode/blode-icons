import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirdropIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 21h-4c-1.1046 0-2-.8954-2-2s.8954-2 2-2h4c1.1046 0 2 .8954 2 2s-.8954 2-2 2M4 11l7 5.5m2 0 7-5.5M12 11v5M12 3c-4.4183 0-8 3.5817-8 8 0 0 4.8697-.5 8-.5s8 .5 8 .5c0-4.4183-3.5817-8-8-8" /></svg>;
const ForwardRef = forwardRef(AirdropIcon);
export default ForwardRef;
