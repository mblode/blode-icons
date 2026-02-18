import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SettingsToggle1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M1 12c0-3.866 3.134-7 7-7h8c3.866 0 7 3.134 7 7s-3.134 7-7 7H8c-3.866 0-7-3.134-7-7m11.5 0c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(SettingsToggle1FilledIcon);
export default createLucideIcon('SettingsToggle1FilledIcon', ForwardRef);
