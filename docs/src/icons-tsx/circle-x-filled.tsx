import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CircleXFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m7.7071-3.7071c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L10.5858 12l-2.293 2.2929c-.3904.3905-.3904 1.0237 0 1.4142.3906.3905 1.0238.3905 1.4143 0L12 13.4142l2.2929 2.2929c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L13.4142 12l2.2929-2.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L12 10.5858z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CircleXFilledIcon);
export default createLucideIcon('CircleXFilledIcon', ForwardRef);
