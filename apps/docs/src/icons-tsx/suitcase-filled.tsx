import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SuitcaseFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8.126 5H7C4.7909 5 3 6.7909 3 9v8c0 1.8638 1.2748 3.4299 3 3.874V21c0 .5523.4477 1 1 1s1-.4477 1-1h8c0 .5523.4477 1 1 1s1-.4477 1-1v-.126c1.7252-.4441 3-2.0102 3-3.874V9c0-2.2091-1.7909-4-4-4h-1.126C15.4299 3.2748 13.8638 2 12 2S8.57 3.2748 8.126 5m2.1416 0h3.4648c-.3458-.5978-.9921-1-1.7324-1s-1.3866.4022-1.7324 1M9 9c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6c0-.5523.4477-1 1-1m6 0c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1s-1-.4477-1-1v-6c0-.5523.4477-1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SuitcaseFilledIcon);
export default createLucideIcon('SuitcaseFilledIcon', ForwardRef);
