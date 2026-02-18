import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BottleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.5 1c-.5523 0-1 .4477-1 1 0 .3701.2011.6933.5.8662v2.8912a2 2 0 0 1-.5858 1.4142L7.1716 8.4142A4 4 0 0 0 6 11.2426V19c0 2.2091 1.7909 4 4 4h4c2.2091 0 4-1.7909 4-4v-7.7574a4 4 0 0 0-1.1716-2.8284l-1.2426-1.2426A2 2 0 0 1 15 5.7574V2.8662c.2989-.1729.5-.496.5-.8662 0-.5523-.4477-1-1-1z" /></svg>;
const ForwardRef = forwardRef(BottleFilledIcon);
export default createLucideIcon('BottleFilledIcon', ForwardRef);
