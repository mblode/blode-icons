import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShapesPlusXSquareCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7 3c.5523 0 1 .4477 1 1v2h2c.5523 0 1 .4477 1 1s-.4477 1-1 1H8v2c0 .5523-.4477 1-1 1s-1-.4477-1-1V8H4c-.5523 0-1-.4477-1-1s.4477-1 1-1h2V4c0-.5523.4477-1 1-1M17 3c-2.2091 0-4 1.7909-4 4s1.7909 4 4 4 4-1.7909 4-4-1.7909-4-4-4M19.8284 15.5854c.3906-.3905.3906-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L17 15.5854l-1.4142-1.4142c-.3905-.3905-1.0237-.3905-1.4142 0-.3906.3905-.3906 1.0237 0 1.4142l1.4142 1.4142-1.4142 1.4142c-.3906.3906-.3906 1.0237 0 1.4143s1.0237.3905 1.4142 0L17 18.4138l1.4142 1.4143c.3905.3905 1.0237.3905 1.4142 0 .3906-.3906.3906-1.0237 0-1.4143l-1.4142-1.4142zM6 13c-1.6569 0-3 1.3431-3 3v2c0 1.6569 1.3431 3 3 3h2c1.6569 0 3-1.3431 3-3v-2c0-1.6569-1.3431-3-3-3z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ShapesPlusXSquareCircleFilledIcon);
export default createLucideIcon('ShapesPlusXSquareCircleFilledIcon', ForwardRef);
