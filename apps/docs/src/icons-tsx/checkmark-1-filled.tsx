import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Checkmark1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M19.3209 4.2447c.6934.4534.8879 1.383.4346 2.0763l-8.5 13a1.4999 1.4999 0 0 1-2.3944.1554l-4.5-5.25c-.539-.629-.4663-1.576.1627-2.1151s1.576-.4663 2.1151.1627l3.1994 3.7326 7.4063-11.3273c.4533-.6934 1.3829-.888 2.0763-.4346" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Checkmark1FilledIcon);
export default createLucideIcon('Checkmark1FilledIcon', ForwardRef);
