import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CirclePlaceholderOffFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.8681 16.6259C21.5911 15.2425 22 13.669 22 12c0-5.5228-4.4771-10-10-10-1.669 0-3.2425.4089-4.6258 1.132zM4.257 5.6712l-1.2141-1.214c-.3905-.3906-.3905-1.0238 0-1.4143s1.0237-.3905 1.4142 0l1.8713 1.8713.0147.0144 12.728 12.728.0145.0148 1.8715 1.8715c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-1.2144-1.2144c-1.7233 1.41-3.9277 2.257-6.3285 2.257-5.5228 0-10-4.4771-10-10 0-2.4008.847-4.6052 2.257-6.3285" /></svg>;
const ForwardRef = forwardRef(CirclePlaceholderOffFilledIcon);
export default createLucideIcon('CirclePlaceholderOffFilledIcon', ForwardRef);
