import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HeartBeatFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M21.5103 6.903c1.6041 3.9998-.494 9.6897-9.0219 14.4695a1 1 0 0 1-.9778 0C2.9826 16.5927.8845 10.9029 2.4886 6.903c.7789-1.9421 2.4136-3.3338 4.3417-3.7637 1.6975-.3785 3.5525.003 5.1691 1.2862 1.6167-1.2833 3.4717-1.6647 5.1692-1.2862 1.9281.4299 3.5628 1.8216 4.3417 3.7636M11.348 9.47a1 1 0 0 0-1.696 0L8.6958 11H8c-.5523 0-1 .4477-1 1s.4477 1 1 1h1.25a1 1 0 0 0 .848-.47l.402-.6432 1.652 2.6432a1 1 0 0 0 1.648.07L15 13h1c.5523 0 1-.4477 1-1s-.4477-1-1-1h-1.5a1 1 0 0 0-.8.4l-.625.8333z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(HeartBeatFilledIcon);
export default createLucideIcon('HeartBeatFilledIcon', ForwardRef);
