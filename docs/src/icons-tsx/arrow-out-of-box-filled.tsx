import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowOutOfBoxFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 11.75c.5523 0 1 .4477 1 1V17c0 1.1046.8954 2 2 2h10c1.1046 0 2-.8954 2-2v-4.25c0-.5523.4477-1 1-1s1 .4477 1 1V17c0 2.2091-1.7909 4-4 4H7c-2.2091 0-4-1.7909-4-4v-4.25c0-.5523.4477-1 1-1" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M12 3a1 1 0 0 1 .7071.2929l4.5 4.5c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L13 6.4142V15.25c0 .5523-.4477 1-1 1s-1-.4477-1-1V6.4142l-2.7929 2.793c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143l4.5-4.5A1 1 0 0 1 12 3" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ArrowOutOfBoxFilledIcon);
export default createLucideIcon('ArrowOutOfBoxFilledIcon', ForwardRef);
