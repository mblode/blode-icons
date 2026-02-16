import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Group1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.0005 3c1.933 0 3.5 1.567 3.5 3.5s-1.567 3.5-3.5 3.5m3 3.5088c2.0779.736 3.722 2.2137 4.5034 4.0579C23.0426 18.838 21.8812 20 20.5005 20m-11.5-10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5m-7.2908 7.1143C2.9661 14.6879 5.758 13 9.0005 13s6.0343 1.6879 7.2907 4.1143C17.053 18.5856 15.6573 20 14.0005 20h-10c-1.6569 0-3.0526-1.4144-2.2908-2.8857" /></svg>;
const ForwardRef = forwardRef(Group1Icon);
export default ForwardRef;
