import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TranslateIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h8M8 6V4M12.0008 14.0003c-3.8867-.9716-5.8851-3.3595-6.454-7.6224" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.0001 13.9998c3.8847-.9712 5.883-3.3572 6.453-7.616M14.5 17.0002h5m-6.5 2 3.0784-7.3111c.3435-.8159 1.4997-.8159 1.8432 0L21 19.0002" /></svg>;
const ForwardRef = forwardRef(TranslateIcon);
export default createLucideIcon('TranslateIcon', ForwardRef);
