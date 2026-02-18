import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CircleHalfFillFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 4c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8zM2 12C2 6.4772 6.4772 2 12 2c.3748 0 .7451.0207 1.1099.061C18.1109 2.6138 22 6.852 22 12s-3.8891 9.3862-8.8901 9.939A10.1 10.1 0 0 1 12 22C6.4772 22 2 17.5228 2 12" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CircleHalfFillFilledIcon);
export default createLucideIcon('CircleHalfFillFilledIcon', ForwardRef);
