import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BalloonFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5.6764 3.2586C7.3326 1.7766 9.5809 1 12 1s4.6674.7767 6.3237 2.2586C19.9923 4.7516 21 6.909 21 9.5286c0 3.2829-1.3793 5.8974-3.1687 7.6829-.8938.8918-1.912 1.5974-2.938 2.0757l.4023.6034C16.1817 21.2197 15.2289 23 13.6315 23h-3.263c-1.5974 0-2.5502-1.7803-1.664-3.1094l.4022-.6034c-1.026-.4783-2.0442-1.1839-2.938-2.0757C4.3793 15.426 3 12.8115 3 9.5285 3 6.909 4.0077 4.7518 5.6764 3.2587m5.4114 16.6625L10.3685 21h3.263l-.7193-1.0789C12.6 19.9733 12.2947 20 12 20s-.6-.0267-.9122-.0789m.8882-14.031c.1203.539-.2191 1.0736-.7581 1.1939-1.0845.242-1.8924.9873-2.1387 2.1272-.1166.5398-.6488.8829-1.1886.7662-.5398-.1166-.8829-.6488-.7663-1.1886.4223-1.9542 1.8652-3.2566 3.6578-3.6568.5391-.1203 1.0736.2191 1.1939.7581" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BalloonFilledIcon);
export default createLucideIcon('BalloonFilledIcon', ForwardRef);
