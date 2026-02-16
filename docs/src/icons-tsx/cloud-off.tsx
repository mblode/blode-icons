import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudOffIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.7807 5.124A6.03 6.03 0 0 1 12 5c3.3137 0 6 2.6863 6 6 2.2091 0 4 1.7909 4 4 0 .4069-.0608.7996-.1737 1.1696m-2.9276 2.7291L7.2867 7.2867a5.99 5.99 0 0 0-.961 1.7584C3.8832 9.3744 2 11.4673 2 14c0 2.7614 2.2386 5 5 5h11c.309 0 .6098-.035.8987-.1013m0 0L21 21 3 3" /></svg>;
const ForwardRef = forwardRef(CloudOffIcon);
export default ForwardRef;
