import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const KeyboardFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7 3C4.7909 3 3 4.7909 3 7v11c0 2.2091 1.7909 4 4 4h10c2.2091 0 4-1.7909 4-4V7c0-2.2091-1.7909-4-4-4zm-.5 2.063C5.6374 5.285 5 6.068 5 7v11c0 1.1046.8954 2 2 2h1v-6h-.5c-.5523 0-1-.4477-1-1zM10 20h4v-6h-.5c-.5523 0-1-.4477-1-1V5h-1v8c0 .5523-.4477 1-1 1H10zm7.5-14.937V13c0 .5523-.4477 1-1 1H16v6h1c1.1046 0 2-.8954 2-2V7c0-.932-.6374-1.715-1.5-1.937" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(KeyboardFilledIcon);
export default createLucideIcon('KeyboardFilledIcon', ForwardRef);
