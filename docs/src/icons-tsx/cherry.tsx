import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CherryIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12c-.7578-3.7722-2.9662-6.7232-6-9 .8746 3.0994.6531 5.7412-1 8.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 16.25c0 2.7615-2.2386 4.7501-5 4.7501s-5-1.9886-5-4.7501c0-3.9475 2.5-4.7499 5-3.75 2.5-.9999 5-.1975 5 3.75M14.5 7H16c1.6569 0 3-1.3431 3-3V3c0-.5523-.4477-1-1-1h-1c-1.6569 0-3 1.3432-3 3v1" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.7505 19.2835c-1.1782 1.4773-3.1894 2.1024-5.1951 1.565-6.4345-1.7241-3.1778-12.2335 2.2-8.2104 1.0803-.1288 2.0845.0266 2.8303.5092" /></svg>;
const ForwardRef = forwardRef(CherryIcon);
export default ForwardRef;
