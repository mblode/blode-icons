import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EyeClosedFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4.7284 8.3894C6.882 6.0997 9.465 5 12.0002 5s5.118 1.0996 7.2715 3.3892c.3783.4024 1.0112.4217 1.4135.0434s.4217-1.0113.0433-1.4136C18.2368 4.3698 15.1423 3 12 3S5.7632 4.3699 3.2716 7.0192c-.3784.4023-.359 1.0352.0433 1.4136.4023.3783 1.0352.359 1.4135-.0434M4.7284 12.253c-.3783-.4023-1.0112-.4217-1.4135-.0433s-.4217 1.0112-.0433 1.4135c1.1827 1.2575 2.5012 2.2268 3.8961 2.8981l-1.0235 1.6935c-.2856.4727-.134 1.0875.3387 1.3731s1.0874.1341 1.373-.3386l1.2145-2.0096c.6353.177 1.2802.296 1.9297.3563V20c0 .5523.4477 1 1 1s1-.4477 1-1v-2.404a10.97 10.97 0 0 0 1.9296-.3563l1.2145 2.0096c.2857.4727.9004.6243 1.3731.3386s.6243-.9004.3386-1.3731l-1.0235-1.6936c1.3949-.6713 2.7134-1.6405 3.896-2.898.3784-.4023.359-1.0352-.0433-1.4135s-1.0352-.359-1.4135.0433c-2.1535 2.2897-4.7365 3.3893-7.2716 3.3893s-5.118-1.0996-7.2715-3.3893" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(EyeClosedFilledIcon);
export default createLucideIcon('EyeClosedFilledIcon', ForwardRef);
