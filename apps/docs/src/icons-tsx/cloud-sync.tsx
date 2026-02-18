import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudSyncIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 19c-2.7614 0-5-2.2386-5-5 0-2.5327 1.8832-4.6256 4.3257-4.955C7.1365 6.6913 9.3707 5 12 5c3.3137 0 6 2.6863 6 6 2.2091 0 4 1.7909 4 4s-1.7909 4-4 4z" /><path fill="currentColor" d="M12 11.249v.858c0 .4359.5189.6631.8391.3674l2.0129-1.858a.5.5 0 0 0 0-.7348l-2.0129-1.858C12.5189 7.7279 12 7.9551 12 8.391v.858c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5c1.1457 0 2.1629-.5516 2.7997-1.3994.3317-.4416.2426-1.0685-.1989-1.4002s-1.0685-.2426-1.4002.199c-.2753.3666-.7105.6006-1.2006.6006-.8284 0-1.5-.6716-1.5-1.5s.6716-1.5 1.5-1.5" /></svg>;
const ForwardRef = forwardRef(CloudSyncIcon);
export default createLucideIcon('CloudSyncIcon', ForwardRef);
