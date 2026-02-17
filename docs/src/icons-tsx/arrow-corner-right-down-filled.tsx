import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowCornerRightDownFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M4 4c0 .5523.4477 1 1 1h7c1.1046 0 2 .8954 2 2v10.5858l-2.2929-2.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l4 4c.3905.3905 1.0237.3905 1.4142 0l4-4c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L16 17.5858V7c0-2.2091-1.7909-4-4-4H5c-.5523 0-1 .4477-1 1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowCornerRightDownFilledIcon);
export default createLucideIcon('ArrowCornerRightDownFilledIcon', ForwardRef);
