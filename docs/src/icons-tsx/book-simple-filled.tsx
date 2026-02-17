import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BookSimpleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7 2C5.3431 2 4 3.3432 4 5v14c0 1.6569 1.3431 3 3 3h9c2.2091 0 4-1.7909 4-4V6c0-2.2091-1.7909-4-4-4zM6 19c0 .5523.4477 1 1 1h9c1.1046 0 2-.8954 2-2v-.5351A3.98 3.98 0 0 1 16 18H7c-.5523 0-1 .4477-1 1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BookSimpleFilledIcon);
export default createLucideIcon('BookSimpleFilledIcon', ForwardRef);
