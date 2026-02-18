import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowWall2UpFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 4c0-.5523.4477-1 1-1h14c.5523 0 1 .4477 1 1s-.4477 1-1 1h-6.2065c.3561.1189.6907.32.9742.6036l-.7071.707m0 0 .7071-.707 3.1894 3.1893c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L13 7.6642V20c0 .5523-.4477 1-1 1s-1-.4477-1-1V7.6642l-2.5429 2.5429c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142l3.1893-3.1893A2.49 2.49 0 0 1 11.2065 5H5c-.5523 0-1-.4477-1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ArrowWall2UpFilledIcon);
export default createLucideIcon('ArrowWall2UpFilledIcon', ForwardRef);
