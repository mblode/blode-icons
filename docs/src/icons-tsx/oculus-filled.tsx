import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OculusFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2.1189 8.2144C3.1179 6.3134 5.1107 5 7.434 5h9.132c2.3232 0 4.316 1.3133 5.3152 3.2144.3924-.31.9636-.2838 1.3259.0785.3905.3905.3905 1.0237 0 1.4142l-.6654.6654c.2379 1.8079-.0748 3.7994-.954 5.4172C20.6028 17.6018 18.862 19 16.3993 19H7.6007c-2.4627 0-4.2035-1.3982-5.1884-3.2103-.8792-1.6178-1.192-3.6093-.954-5.4172L.793 9.7071c-.3905-.3905-.3905-1.0237 0-1.4142.3623-.3623.9335-.3885 1.326-.0785M13 8h-2c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(OculusFilledIcon);
export default createLucideIcon('OculusFilledIcon', ForwardRef);
