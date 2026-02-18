import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColorRollFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 6c0-1.6569 1.3431-3 3-3h9c1.6569 0 3 1.3431 3 3v2c0 1.6569-1.3431 3-3 3H9c-1.6569 0-3-1.3431-3-3H5v2c0 1.1046.8954 2 2 2h6c.5523 0 1 .4477 1 1v2.1707c1.1652.4118 2 1.5231 2 2.8293v3c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3c0-.5523-.4477-1-1-1s-1 .4477-1 1v3c0 .5523-.4477 1-1 1s-1-.4477-1-1v-3c0-1.3062.8348-2.4175 2-2.8293V14H7c-2.2091 0-4-1.7909-4-4V8c0-1.1046.8954-2 2-2z" /></svg>;
const ForwardRef = forwardRef(ColorRollFilledIcon);
export default createLucideIcon('ColorRollFilledIcon', ForwardRef);
