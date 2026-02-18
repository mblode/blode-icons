import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BoldFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 7.625C5 5.1638 6.9239 3 9.5 3h3.3333c3.0364 0 5.3334 2.5555 5.3334 5.5a5.628 5.628 0 0 1-.8549 2.9836C18.3611 12.5023 19 13.9471 19 15.5c0 2.9445-2.297 5.5-5.3333 5.5H9.5C6.9239 21 5 18.8362 5 16.375zM12.8333 10c.6456 0 1.3334-.5785 1.3334-1.5S13.4789 7 12.8333 7H9.5c-.1853 0-.5.1867-.5.625V10zM9 14h4.6667C14.3122 14 15 14.5785 15 15.5s-.6878 1.5-1.3333 1.5H9.5c-.1853 0-.5-.1867-.5-.625z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BoldFilledIcon);
export default createLucideIcon('BoldFilledIcon', ForwardRef);
