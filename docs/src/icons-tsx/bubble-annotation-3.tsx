import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BubbleAnnotation3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9c0 1.3416.2936 2.6147.82 3.7585.1099.2388.1362.5095.058.7605l-.7962 2.5585c-.3558 1.1432.7052 2.2219 1.8542 1.8852l2.6883-.7881c.2415-.0708.5-.0457.73.0564C9.4687 20.7253 10.7023 21 12 21" /><path fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={0.75} d="M6.625 12a.875.875 0 1 0 1.75 0 .875.875 0 0 0-1.75 0Zm4.5 0a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 11.125 12Zm4.5 0a.875.875 0 1 0 1.7501-.0001A.875.875 0 0 0 15.625 12Z" /></svg>;
const ForwardRef = forwardRef(BubbleAnnotation3Icon);
export default createLucideIcon('BubbleAnnotation3Icon', ForwardRef);
