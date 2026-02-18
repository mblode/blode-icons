import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SubstackIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 3h16v2.2102H4zm0 8.062h16V21l-8.0016-4.4224L4 21zm0-4.031h16v2.2102H4z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SubstackIcon);
export default createLucideIcon('SubstackIcon', ForwardRef);
