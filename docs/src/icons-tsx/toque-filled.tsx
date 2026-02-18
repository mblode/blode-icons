import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ToqueFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m17.1967 4.9993.0027.0046C19.8684 5.1086 22 7.3054 22 10c0 2.0503-1.2341 3.8124-3 4.584V16H5v-1.416C3.2341 13.8124 2 12.0503 2 10c0-2.6946 2.1315-4.8913 4.8004-4.996C7.8373 3.2083 9.7775 2 12 2c2.2221 0 4.1608 1.2085 5.1967 2.9993M5 18c0 2.2091 1.7909 4 4 4h6c2.2091 0 4-1.7909 4-4z" /></svg>;
const ForwardRef = forwardRef(ToqueFilledIcon);
export default createLucideIcon('ToqueFilledIcon', ForwardRef);
