import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageTextPieChartFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 6c0-2.2091 1.7909-4 4-4h8c2.2091 0 4 1.7909 4 4v4.6736C19.0907 10.2417 18.0736 10 17 10c-3.866 0-7 3.134-7 7 0 1.9587.8045 3.7295 2.101 5H8c-2.2091 0-4-1.7909-4-4zm3 0c0-.5523.4477-1 1-1h6c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1m0 4c0-.5523.4477-1 1-1h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8c-.5523 0-1-.4477-1-1" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M17 12c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5c1.3804 0 2.6318-.5607 3.5355-1.4645C21.4393 19.6318 22 18.3804 22 17c0-2.7614-2.2386-5-5-5m-3 5c0-1.3062.8348-2.4175 2-2.8293V17c0 .2652.1054.5196.2929.7071l2.0007 2.0007A2.99 2.99 0 0 1 17 20c-1.6569 0-3-1.3431-3-3m4-.4142v-2.4151c1.1652.4118 2 1.5231 2 2.8293 0 .4635-.1047.902-.2922 1.2936z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(PageTextPieChartFilledIcon);
export default createLucideIcon('PageTextPieChartFilledIcon', ForwardRef);
