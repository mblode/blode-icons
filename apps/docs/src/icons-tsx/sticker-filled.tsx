import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StickerFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.4772 6.4772 2 12 2c.9694 0 1.8128.4535 2.4156 1.0564l6.528 6.528C21.5465 10.1872 22 11.0306 22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12m18 0c-5.5 1-9-2.5-8-8z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(StickerFilledIcon);
export default createLucideIcon('StickerFilledIcon', ForwardRef);
