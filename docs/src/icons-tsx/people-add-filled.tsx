import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PeopleAddFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C9.5147 2 7.5 4.0147 7.5 6.5S9.5147 11 12 11s4.5-2.0147 4.5-4.5S14.4853 2 12 2M12.0001 12c-3.3577 0-6.0375 1.7661-7.4474 4.3886-.6292 1.1703-.392 2.3851.3055 3.2528.0841.1047.1749.2045.2714.2989C5.8058 20.6011 6.7702 21 7.7954 21H15c-1.6482 0-2.986-1.3292-2.9999-2.9741v-.0518C12.014 16.3292 13.3518 15 15 15c0-.8238.3321-1.5701.8696-2.1122-1.0717-.5359-2.2927-.8503-3.625-.8847A10 10 0 0 0 12.0001 12" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M18 14c.5523 0 1 .4477 1 1v2h2c.5523 0 1 .4477 1 1s-.4477 1-1 1h-2v2c0 .5523-.4477 1-1 1s-1-.4477-1-1v-2h-2c-.5523 0-1-.4477-1-1s.4477-1 1-1h2v-2c0-.5523.4477-1 1-1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PeopleAddFilledIcon);
export default createLucideIcon('PeopleAddFilledIcon', ForwardRef);
