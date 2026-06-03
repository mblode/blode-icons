import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SubstackFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M19.9993 7.119H4v2.1612h15.9993zM4 11.2381V21.286l7.9993-4.4874L20 21.286V11.2381zM19.9993 3H4v2.1608h15.9993z" /></svg>;
const ForwardRef = forwardRef(SubstackFilledIcon);
export default createLucideIcon('SubstackFilledIcon', ForwardRef);
