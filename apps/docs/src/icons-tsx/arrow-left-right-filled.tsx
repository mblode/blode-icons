import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowLeftRightFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M15.7929 21.7071c.3905.3905 1.0237.3905 1.4142 0l2.9393-2.9393c.9764-.9763.9764-2.5593 0-3.5356l-.7071.7071m-3.6464 5.7678c-.3905-.3905-.3905-1.0237 0-1.4142zm0-1.4142L18.0858 18zM18.0858 18H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h14.0858l-2.2929-2.2929c-.3905-.3905-.3905-1.0237 0-1.4142s1.0237-.3905 1.4142 0l2.9393 2.9393M8.2071 11.7071c.3905-.3905.3905-1.0237 0-1.4142L5.9142 8H20c.5523 0 1-.4477 1-1s-.4477-1-1-1H5.9142l2.293-2.2929c.3904-.3905.3904-1.0237 0-1.4142-.3906-.3905-1.0238-.3905-1.4143 0L3.8535 5.2322c-.9763.9763-.9763 2.5593 0 3.5356L6.793 11.707c.3905.3905 1.0237.3905 1.4142 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ArrowLeftRightFilledIcon);
export default createLucideIcon('ArrowLeftRightFilledIcon', ForwardRef);
