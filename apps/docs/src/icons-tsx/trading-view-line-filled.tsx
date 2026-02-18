import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TradingViewLineFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M22.6247 6.2192c.4313.345.5012.9743.1562 1.4055l-5.9569 7.4461c-1.465 1.8312-4.1838 2.0151-5.8821.3977l-2.397-2.2828c-.8159-.7771-2.1122-.7271-2.8659.1103l-2.9357 3.2619c-.3695.4105-1.0018.4438-1.4123.0743s-.4437-1.0017-.0743-1.4122l2.9357-3.2619c1.5074-1.6749 4.1001-1.7747 5.7318-.2207l2.3971 2.2829c.8491.8086 2.2085.7167 2.941-.1989l5.9568-7.446c.345-.4313.9743-.5012 1.4056-.1562" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(TradingViewLineFilledIcon);
export default createLucideIcon('TradingViewLineFilledIcon', ForwardRef);
