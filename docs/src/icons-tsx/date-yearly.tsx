import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DateYearlyIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.0001 2v4m9 5.0001h-4M7 11.0001H3m9.0001 5.1269V20m-5-14 1.4645 1.4645M17 6l-1.4643 1.4645m.0898 7.1608L17 16m-8.5354-1.4644C6.1162 16.5362 4.7974 19.0169 4 22m9-11c0 .5523-.4478 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1" /></svg>;
const ForwardRef = forwardRef(DateYearlyIcon);
export default ForwardRef;
