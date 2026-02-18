import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SettingsToggle2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M1 12c0-3.3137 2.6863-6 6-6h10c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6H7c-3.3137 0-6-2.6863-6-6m16-4c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4 4-1.7909 4-4-1.7909-4-4-4" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SettingsToggle2FilledIcon);
export default createLucideIcon('SettingsToggle2FilledIcon', ForwardRef);
