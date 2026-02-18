import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FoodBellFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13 5c0-.5523-.4477-1-1-1s-1 .4477-1 1v.0494c-4.6884.4654-8.4234 4.1685-8.9392 8.8425C1.9268 15.1066 2.9287 16 4 16h16c1.0713 0 2.0733-.8934 1.9392-2.1081-.5158-4.674-4.2508-8.3771-8.9392-8.8425zM3 17c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c0 .5523.4477 1 1 1h4c.5523 0 1-.4477 1-1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1z" /></svg>;
const ForwardRef = forwardRef(FoodBellFilledIcon);
export default createLucideIcon('FoodBellFilledIcon', ForwardRef);
