import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareBehindSquare3FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16 8V5.25C16 3.455 14.5449 2 12.75 2h-7.5C3.455 2 2 3.455 2 5.25v7.5C2 14.5449 3.455 16 5.25 16H8v2.75C8 20.5449 9.455 22 11.25 22h7.5c1.7949 0 3.25-1.4551 3.25-3.25v-7.5C22 9.455 20.5449 8 18.75 8zm-3.25 8c1.7949 0 3.25-1.4551 3.25-3.25V10h2.75c.6904 0 1.25.5596 1.25 1.25v7.5c0 .6904-.5596 1.25-1.25 1.25h-7.5c-.6904 0-1.25-.5596-1.25-1.25V16z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SquareBehindSquare3FilledIcon);
export default createLucideIcon('SquareBehindSquare3FilledIcon', ForwardRef);
