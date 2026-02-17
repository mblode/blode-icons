import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ReorderFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6.5 3C4.567 3 3 4.567 3 6.5S4.567 10 6.5 10 10 8.433 10 6.5 8.433 3 6.5 3M16.2071 5.2071c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-2 2c-.3905.3905-.3905 1.0237 0 1.4142l2 2c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L15.9142 7.5H17c1.1046 0 2 .8954 2 2v5c0 1.1046-.8954 2-2 2h-3c-.5523 0-1 .4477-1 1s.4477 1 1 1h3c2.2091 0 4-1.7909 4-4v-5c0-2.2091-1.7909-4-4-4h-1.0858zM6.5 14C4.567 14 3 15.567 3 17.5S4.567 21 6.5 21s3.5-1.567 3.5-3.5S8.433 14 6.5 14" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ReorderFilledIcon);
export default createLucideIcon('ReorderFilledIcon', ForwardRef);
