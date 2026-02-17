import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RemoveFromBasketIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m21 6-1.0822 6.4932C19.6767 13.9398 18.4251 15 16.9586 15H8.5414c-1.4665 0-2.7181-1.0602-2.9592-2.5068L4.2089 4.2534A1.5 1.5 0 0 0 2.7293 3H2m8.5 1.5L13 7m0 0 2.5-2.5M13 7l-2.5 2.5M13 7l2.5 2.5M9 19c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1m9 0c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1" /></svg>;
const ForwardRef = forwardRef(RemoveFromBasketIcon);
export default createLucideIcon('RemoveFromBasketIcon', ForwardRef);
