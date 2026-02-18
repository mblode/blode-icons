import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CompassRoundFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m12.5237-3.7527c.7465-.2036 1.4315.4814 1.2279 1.2279l-1.1194 4.1045a1.5 1.5 0 0 1-1.0525 1.0525l-4.1045 1.1194c-.7465.2036-1.4315-.4814-1.228-1.2279l1.1195-4.1045a1.5 1.5 0 0 1 1.0525-1.0525z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CompassRoundFilledIcon);
export default createLucideIcon('CompassRoundFilledIcon', ForwardRef);
