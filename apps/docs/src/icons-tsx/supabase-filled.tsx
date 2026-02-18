import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SupabaseFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.6849 21.9296c-.5248.6609-1.5889.2988-1.6016-.5451L11.8984 9.042h8.2991c1.5032 0 2.3416 1.7362 1.4069 2.9134z" /><path fill="currentColor" d="M10.3124 2.0699c.5248-.661 1.5889-.2989 1.6016.545l.081 12.3425H3.7998c-1.5033 0-2.3416-1.7362-1.4069-2.9134z" /></svg>;
const ForwardRef = forwardRef(SupabaseFilledIcon);
export default createLucideIcon('SupabaseFilledIcon', ForwardRef);
