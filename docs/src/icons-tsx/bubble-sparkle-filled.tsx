import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleSparkleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.002 3h9.9999c2.2092 0 4.0001 1.7909 4.0001 4v8.0358c0 2.2091-1.7909 3.9999-4 4h-1.6263l-2.74 2.27a1 1 0 0 1-1.2804-.0037l-2.7037-2.2663H7.0019c-2.209 0-4-1.7909-4-4V7c0-2.2091 1.791-4 4-4m4.9978 4a.5715.5715 0 0 1 .5714.5714c0 1.1208.2482 1.7973.654 2.2031s1.0824.6541 2.2031.6541a.5715.5715 0 1 1 0 1.1428c-1.1207 0-1.7972.2483-2.2031.6541-.4058.4058-.654 1.0823-.654 2.2031a.5714.5714 0 0 1-1.1429 0c0-1.1208-.2482-1.7973-.654-2.2031s-1.0824-.6541-2.2031-.6541a.5714.5714 0 1 1 0-1.1428c1.1207 0 1.7972-.2483 2.2031-.654.4058-.406.654-1.0824.654-2.2032A.5715.5715 0 0 1 11.9998 7" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BubbleSparkleFilledIcon);
export default createLucideIcon('BubbleSparkleFilledIcon', ForwardRef);
