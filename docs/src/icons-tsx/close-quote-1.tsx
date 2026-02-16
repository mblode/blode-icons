import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloseQuote1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.9926 9.5c0 1.933-1.5653 3.5-3.4963 3.5S3 11.433 3 9.5 4.5653 6 6.4963 6s3.4963 1.567 3.4963 3.5m0 0c.2498 4.75-1.9979 6.5-4.9947 8.5M20.981 9.5c0 1.933-1.5653 3.5-3.4963 3.5-1.9309 0-3.4963-1.567-3.4963-3.5S15.5538 6 17.4847 6s3.4963 1.567 3.4963 3.5m0 0c.2498 4.75-1.9978 6.5-4.9947 8.5" /></svg>;
const ForwardRef = forwardRef(CloseQuote1Icon);
export default ForwardRef;
