import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ClosedCaptioningIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M15.9571 11.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142 1.0237.3905 1.4142 0 1.0237-.3905 1.4142 0 .3905 1.0237 0 1.4142c-1.1716 1.1716-3.071 1.1716-4.2426 0s-1.1716-3.071 0-4.2426 3.071-1.1716 4.2426 0c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0m-6.3316-.2203a1.001 1.001 0 0 0-1.0826.2203c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0 1.0237-.3905 1.4142 0 .3905 1.0237 0 1.4142c-1.1716 1.1716-3.071 1.1716-4.2426 0s-1.1716-3.071 0-4.2426c.8787-.8788 2.1652-1.097 3.2458-.6605.364.147.7042.3678.9968.6605.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0a.995.995 0 0 0-.3316-.2203" clipRule="evenodd" /><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M4 7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3z" /></svg>;
const ForwardRef = forwardRef(ClosedCaptioningIcon);
export default createLucideIcon('ClosedCaptioningIcon', ForwardRef);
