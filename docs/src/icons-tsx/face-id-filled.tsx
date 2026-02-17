import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FaceIdFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3 7c0-2.2091 1.7909-4 4-4h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-1.1046 0-2 .8954-2 2v1c0 .5523-.4477 1-1 1s-1-.4477-1-1zm12-3c0-.5523.4477-1 1-1h1c2.2091 0 4 1.7909 4 4v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V7c0-1.1046-.8954-2-2-2h-1c-.5523 0-1-.4477-1-1m-2.5 3.75c.5523 0 1 .4477 1 1V11c0 1.3993-.957 2.5725-2.2507 2.9054-.5349.1377-1.0801-.1843-1.2177-.7192-.1377-.5348.1843-1.08.7191-1.2176A1.001 1.001 0 0 0 11.5 11V8.75c0-.5523.4477-1 1-1M8 8c.5523 0 1 .4477 1 1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-.5523.4477-1 1-1m8 0c.5523 0 1 .4477 1 1v1c0 .5523-.4477 1-1 1s-1-.4477-1-1V9c0-.5523.4477-1 1-1m-7.8656 7.1966c.2765-.4781.8883-.6414 1.3663-.3649.7344.4249 1.5869.6683 2.4993.6683s1.7649-.2434 2.4993-.6683c.478-.2765 1.0898-.1132 1.3663.3649s.1132 1.0898-.3649 1.3663c-1.0306.5962-2.2274.9371-3.5007.9371s-2.4701-.3409-3.5007-.9371c-.478-.2765-.6414-.8882-.365-1.3663M4 15c.5523 0 1 .4477 1 1v1c0 1.1046.8954 2 2 2h1c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-2.2091 0-4-1.7909-4-4v-1c0-.5523.4477-1 1-1m16 0c.5523 0 1 .4477 1 1v1c0 2.2091-1.7909 4-4 4h-1c-.5523 0-1-.4477-1-1s.4477-1 1-1h1c1.1046 0 2-.8954 2-2v-1c0-.5523.4477-1 1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FaceIdFilledIcon);
export default createLucideIcon('FaceIdFilledIcon', ForwardRef);
