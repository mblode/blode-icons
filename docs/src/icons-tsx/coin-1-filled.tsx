import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Coin1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.0798 4.098C6.3534 4.6803 4 7.8 4 12s2.3534 7.3198 5.0798 7.902C7.1693 18.0298 6 15.1103 6 12s1.1693-6.0298 3.0798-7.902M14 22h-4c-4.6376 0-8-4.7256-8-10S5.3624 2 10 2h4c4.6376 0 8 4.7256 8 10s-3.3624 10-8 10" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Coin1FilledIcon);
export default ForwardRef;
