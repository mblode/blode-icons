import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarSearchFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M19.8284 14.1716c-1.5621-1.5621-4.0947-1.5621-5.6568 0s-1.5621 4.0947 0 5.6568c1.3179 1.318 3.3267 1.524 4.8606.618l1.2607 1.2607c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-1.2607-1.2607c.906-1.5339.7-3.5427-.618-4.8606m-4.2426 4.2426c-.7811-.781-.7811-2.0474 0-2.8284.781-.7811 2.0474-.7811 2.8284 0 .7811.781.7811 2.0474 0 2.8284-.781.7811-2.0474.7811-2.8284 0" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M9 3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1C4.7909 4 3 5.7909 3 8v9c0 2.2091 1.7909 4 4 4h3c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2v-7h14c0 .5523.4477 1 1 1s1-.4477 1-1V8c0-2.2091-1.7909-4-4-4V3c0-.5523-.4477-1-1-1s-1 .4477-1 1v1H9z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CalendarSearchFilledIcon);
export default ForwardRef;
