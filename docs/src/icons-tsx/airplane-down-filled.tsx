import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AirplaneDownFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4.2541 2.0157a1 1 0 0 0-1.174 1.0563l.2582 3.579a3.565 3.565 0 0 0-1.2897 2.16c-.2985 1.6566.8101 3.2505 2.4783 3.5197l2.4754.3996c-.5526 1.1847.1543 2.5959 1.4606 2.8302l.7075.127a3.98 3.98 0 0 0 2.4085-.3216l2.813-1.3335 4.1294.7408c1.2316.221 2.4635-.3607 3.0841-1.4449.6762-1.1812.4685-2.6755-.5082-3.6247l-1.4437-1.403a2.994 2.994 0 0 0-1.5867-.806c-1.6958-.2877-6.4565-1.0969-8.4824-1.4604a1.01 1.01 0 0 1-.6973-.495L8.1058 4.17c-.5885-1.0314-1.6013-1.7505-2.769-1.96zM3 18c-.5522 0-1 .4477-1 1s.4478 1 1 1h18.0001c.5522 0 1-.4477 1-1s-.4478-1-1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AirplaneDownFilledIcon);
export default createLucideIcon('AirplaneDownFilledIcon', ForwardRef);
