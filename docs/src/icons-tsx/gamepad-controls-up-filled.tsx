import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GamepadControlsUpFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.5 2C9.1193 2 8 3.1193 8 4.5v1.6287a2.5 2.5 0 0 0 .7322 1.7677L10.5858 9.75c.781.781 2.0474.781 2.8284 0l1.8536-1.8536A2.5 2.5 0 0 0 16 6.1288V4.5C16 3.1193 14.8807 2 13.5 2zm0 2a.5.5 0 0 0-.5.5v1.6287c0 .1326.0527.2598.1464.3535L12 8.3358l1.8536-1.8536A.5.5 0 0 0 14 6.1287V4.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M4.5 8C3.1193 8 2 9.1193 2 10.5v3C2 14.8807 3.1193 16 4.5 16h1.6287c.663 0 1.299-.2634 1.7677-.7322L9.75 13.4142c.781-.781.781-2.0474 0-2.8284L7.8964 8.7322A2.5 2.5 0 0 0 6.1288 8zM17.8713 8c-.663 0-1.2989.2634-1.7677.7322L14.25 10.5858c-.781.781-.781 2.0474 0 2.8284l1.8536 1.8536A2.5 2.5 0 0 0 17.8713 16H19.5c1.3807 0 2.5-1.1193 2.5-2.5v-3C22 9.1193 20.8807 8 19.5 8zM13.4142 14.25c-.781-.781-2.0474-.781-2.8284 0l-1.8536 1.8536A2.5 2.5 0 0 0 8 17.8713V19.5c0 1.3807 1.1193 2.5 2.5 2.5h3c1.3807 0 2.5-1.1193 2.5-2.5v-1.6287a2.5 2.5 0 0 0-.7322-1.7677z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GamepadControlsUpFilledIcon);
export default createLucideIcon('GamepadControlsUpFilledIcon', ForwardRef);
