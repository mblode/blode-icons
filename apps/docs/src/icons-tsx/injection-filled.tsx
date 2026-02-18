import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InjectionFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M17.2928 2.2927c.3662-.366.9452-.3887 1.3379-.0683l.0762.0683 3 3 .0684.0762c.3202.3928.2977.9718-.0684 1.3379-.3661.366-.9451.3885-1.3379.0684l-.0762-.0684-.7929-.793-1.586 1.586 2.793 2.7929.0684.0762c.3202.3928.2977.9718-.0684 1.3379-.3661.366-.9451.3885-1.3379.0684l-.0762-.0684-.7929-.793-6.293 6.293c-1.2505 1.2505-3.1511 1.4547-4.6142.6133l-3.8858 3.8867c-.3905.3904-1.0235.3903-1.414 0-.3905-.3905-.3905-1.0235 0-1.4141l3.8857-3.8867c-.841-1.463-.636-3.3629.6142-4.6133l6.293-6.293-.793-.7929-.0683-.0762c-.3203-.3927-.2977-.9718.0683-1.3379.3662-.366.9452-.3887 1.3379-.0683l.0762.0683 2.793 2.793 1.5859-1.586-.793-.7929-.0683-.0762c-.3203-.3927-.2977-.9717.0683-1.3379" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(InjectionFilledIcon);
export default createLucideIcon('InjectionFilledIcon', ForwardRef);
