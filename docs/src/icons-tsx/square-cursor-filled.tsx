import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SquareCursorFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 3C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h3c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2V7c0-1.1046.8954-2 2-2h10c1.1046 0 2 .8954 2 2v3c0 .5523.4477 1 1 1s1-.4477 1-1V7c0-2.2091-1.7909-4-4-4z" /><path fill="currentColor" d="M11.0079 12.8463c-.2993-1.1156.7218-2.1367 1.8375-1.8374l8.2495 2.2133c1.2897.346 1.5185 2.0779.3629 2.7469L17.981 17.982l-2.0129 3.4768c-.669 1.1555-2.4009.9268-2.7469-.3629z" /></svg>;
const ForwardRef = forwardRef(SquareCursorFilledIcon);
export default createLucideIcon('SquareCursorFilledIcon', ForwardRef);
