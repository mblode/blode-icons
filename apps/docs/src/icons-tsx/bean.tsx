import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BeanIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M19.0276 4.9724c3.1049 3.105 2.4757 8.7684-1.4056 12.6496-3.8812 3.8813-9.5446 4.5105-12.6496 1.4056S2.4967 10.2592 6.378 6.378c3.8813-3.8813 9.5447-4.5105 12.6497-1.4056Z" /><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M4.25 17.75c4-8 11.5-3.5 15.5-11.5" /></svg>;
const ForwardRef = forwardRef(BeanIcon);
export default createLucideIcon('BeanIcon', ForwardRef);
