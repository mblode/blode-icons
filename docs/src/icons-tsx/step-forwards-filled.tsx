import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StepForwardsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M16.2929 2.2929c.3905-.3905 1.0237-.3905 1.4142 0l3 3c.3905.3905.3905 1.0237 0 1.4142l-3 3c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L17.5858 7H10.5C7.4624 7 5 9.4624 5 12.5S7.4624 18 10.5 18H18c.5523 0 1 .4477 1 1s-.4477 1-1 1h-7.5C6.3579 20 3 16.6421 3 12.5S6.3579 5 10.5 5h7.0858l-1.2929-1.2929c-.3905-.3905-.3905-1.0237 0-1.4142" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(StepForwardsFilledIcon);
export default createLucideIcon('StepForwardsFilledIcon', ForwardRef);
