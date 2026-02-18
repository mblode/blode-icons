import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EraserSimpleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11.1711 4.4143c1.5621-1.5621 4.0948-1.5621 5.6569 0l2.7573 2.7573c1.5621 1.5621 1.5621 4.0948 0 5.6569L14.9138 17.5 6.4996 9.0858zM5.0853 10.5l-.6715.6716c-1.5621 1.5621-1.5621 4.0948 0 5.6569l2.7573 2.7573c1.5621 1.5621 4.0948 1.5621 5.6569 0l.6715-.6716z" /></svg>;
const ForwardRef = forwardRef(EraserSimpleFilledIcon);
export default createLucideIcon('EraserSimpleFilledIcon', ForwardRef);
