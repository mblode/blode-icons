import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CmdBoxFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9 8.5V9h-.5a.5.5 0 1 1 .5-.5M11 13v-2h2v2zM8.5 15H9v.5a.5.5 0 1 1-.5-.5M15 15.5V15h.5a.5.5 0 1 1-.5.5M15.5 9H15v-.5a.5.5 0 1 1 .5.5" /><path fill="currentColor" fillRule="evenodd" d="M7 3C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4zm1.5 3C7.1193 6 6 7.1193 6 8.5S7.1193 11 8.5 11H9v2h-.5C7.1193 13 6 14.1193 6 15.5S7.1193 18 8.5 18s2.5-1.1193 2.5-2.5V15h2v.5c0 1.3807 1.1193 2.5 2.5 2.5s2.5-1.1193 2.5-2.5-1.1193-2.5-2.5-2.5H15v-2h.5c1.3807 0 2.5-1.1193 2.5-2.5S16.8807 6 15.5 6 13 7.1193 13 8.5V9h-2v-.5C11 7.1193 9.8807 6 8.5 6" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CmdBoxFilledIcon);
export default createLucideIcon('CmdBoxFilledIcon', ForwardRef);
