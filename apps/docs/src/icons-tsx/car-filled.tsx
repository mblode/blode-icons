import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CarFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M23 11.6857V17c0 1.6569-1.3431 3-3 3-1.3062 0-2.4175-.8348-2.8293-2H6.8293C6.4175 19.1652 5.3063 20 4 20c-1.6568 0-3-1.3431-3-3v-5.5c-.5523 0-1-.4477-1-1s.4477-1 1-1h.4908l2.802-3.8527A4 4 0 0 1 7.5276 4h8.9148a4 4 0 0 1 3.2715 1.6984l2.8052 3.9873H23c.5523 0 1 .4477 1 1s-.4477 1-1 1M6 12c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1zm10 0c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CarFilledIcon);
export default createLucideIcon('CarFilledIcon', ForwardRef);
