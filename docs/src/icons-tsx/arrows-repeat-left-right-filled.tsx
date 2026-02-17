import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowsRepeatLeftRightFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M16.7929 21.7071c.3905.3905 1.0237.3905 1.4142 0L20.5 19.4142c.781-.781.781-2.0474 0-2.8284l-2.2929-2.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L18.0858 17H7c-1.1046 0-2-.8954-2-2v-2c0-.5523-.4477-1-1-1s-1 .4477-1 1v2c0 2.2091 1.7909 4 4 4h11.0858l-1.2929 1.2929c-.3905.3905-.3905 1.0237 0 1.4142M21 11c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-1.1046-.8954-2-2-2H5.914l1.293 1.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4143 0L3.5 7.4142c-.7811-.781-.7811-2.0474 0-2.8284l2.2928-2.293c.3906-.3904 1.0237-.3904 1.4143 0 .3905.3906.3905 1.0238 0 1.4143L5.914 5H17c2.2091 0 4 1.7909 4 4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowsRepeatLeftRightFilledIcon);
export default createLucideIcon('ArrowsRepeatLeftRightFilledIcon', ForwardRef);
