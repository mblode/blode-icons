import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MagnifyingGlass2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3 11c0-4.4183 3.5817-8 8-8s8 3.5817 8 8c0 1.8487-.6271 3.5509-1.6801 4.9056l3.3873 3.3873c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4143 0l-3.3872-3.3873C14.551 18.3729 12.8487 19 11 19c-4.4183 0-8-3.5817-8-8" /></svg>;
const ForwardRef = forwardRef(MagnifyingGlass2FilledIcon);
export default createLucideIcon('MagnifyingGlass2FilledIcon', ForwardRef);
