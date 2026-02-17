import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ApiConnectionFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 12c0-3.866 3.134-7 7-7 2.5897 0 4.8523 1.4058 6.0641 3.5007.2766.478.8883.6415 1.3664.365.478-.2766.6414-.8884.3648-1.3664C18.2407 4.8118 15.3325 3 12 3c-4.6325 0-8.4476 3.5-8.945 8H2c-.5523 0-1 .4477-1 1s.4477 1 1 1h1.055c.4974 4.5 4.3124 8 8.945 8 3.3325 0 6.2407-1.8118 7.7953-4.4993.2766-.478.1132-1.0898-.3648-1.3663-.4781-.2765-1.0898-.1132-1.3664.3649C16.8523 17.5942 14.5897 19 12 19c-3.866 0-7-3.134-7-7" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M12 7c-2.7614 0-5 2.2386-5 5s2.2386 5 5 5c2.419 0 4.4367-1.7178 4.9-4H22c.5523 0 1-.4477 1-1s-.4477-1-1-1h-5.1c-.4633-2.2822-2.481-4-4.9-4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ApiConnectionFilledIcon);
export default createLucideIcon('ApiConnectionFilledIcon', ForwardRef);
