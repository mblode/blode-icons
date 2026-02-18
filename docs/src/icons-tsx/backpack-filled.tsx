import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BackpackFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.126 4H6C4.3431 4 3 5.3431 3 7v1c0 1.0395.3965 1.9864 1.0465 2.6976A1 1 0 0 0 4 11v7c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4v-7c0-.1054-.0163-.207-.0465-.3024C20.6035 9.9864 21 9.0395 21 8V7c0-1.6569-1.3431-3-3-3h-2.126C15.4299 2.2748 13.8638 1 12 1S8.57 2.2748 8.126 4m2.1416 0h3.4648c-.3458-.5978-.9921-1-1.7324-1s-1.3866.4022-1.7324 1M18 11.874A4 4 0 0 1 17 12h-1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1h-4v1c0 .5523-.4477 1-1 1s-1-.4477-1-1v-1H7a4 4 0 0 1-1-.126V18c0 1.1046.8954 2 2 2h8c1.1046 0 2-.8954 2-2zM9 17c0-.5523.4477-1 1-1h4c.5523 0 1 .4477 1 1s-.4477 1-1 1h-4c-.5523 0-1-.4477-1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BackpackFilledIcon);
export default createLucideIcon('BackpackFilledIcon', ForwardRef);
