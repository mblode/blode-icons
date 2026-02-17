import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const IncognitoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.9914 16.7717C9.8748 15.2215 8.58 14 7 14c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3q0-.1152-.0086-.2283m0 0c1.1394-1.0288 2.8777-1.0289 4.0172-.0004m0 0A3 3 0 0 0 14 17c0 1.6569 1.3431 3 3 3s3-1.3431 3-3-1.3431-3-3-3c-1.5799 0-2.8746 1.2213-2.9914 2.7713M19 11h2m-2 0-.632-4.4243C18.1568 5.0977 16.8911 4 15.3981 4H8.6019C7.1089 4 5.8432 5.0978 5.632 6.5757L5 11m14 0H5m0 0H3" /></svg>;
const ForwardRef = forwardRef(IncognitoIcon);
export default createLucideIcon('IncognitoIcon', ForwardRef);
