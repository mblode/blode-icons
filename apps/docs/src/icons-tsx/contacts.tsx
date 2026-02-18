import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ContactsIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H6.5c-.8284 0-1.5-.6716-1.5-1.5m0 0V6c0-1.6569 1.3431-3 3-3h10c.5523 0 1 .4477 1 1v14H6.5c-.8284 0-1.5.6716-1.5 1.5m7.75-10.75a.75.75 0 0 1-1.5 0m1.5 0a.75.75 0 0 0-1.5 0m1.5 0h-1.5M12 12c-1.5149 0-1.8855.6357-1.9735.8934-.0191.056.0248.1066.084.1066h3.779c.0592 0 .1031-.0506.084-.1066C13.8855 12.6357 13.5149 12 12 12" /></svg>;
const ForwardRef = forwardRef(ContactsIcon);
export default createLucideIcon('ContactsIcon', ForwardRef);
