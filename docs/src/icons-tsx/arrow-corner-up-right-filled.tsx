import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowCornerUpRightFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 20c.5523 0 1-.4477 1-1v-7c0-1.1046.8954-2 2-2h10.5858l-2.2929 2.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0l4-4c.3905-.3905.3905-1.0237 0-1.4142l-4-4c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L17.5858 8H7c-2.2091 0-4 1.7909-4 4v7c0 .5523.4477 1 1 1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ArrowCornerUpRightFilledIcon);
export default createLucideIcon('ArrowCornerUpRightFilledIcon', ForwardRef);
