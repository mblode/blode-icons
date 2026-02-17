import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColumnWideRemoveFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18 6h-5v13c0 .5523-.4477 1-1 1H6c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4h12c2.2091 0 4 1.7909 4 4v2c0 .5523-.4477 1-1 1s-1-.4477-1-1V8c0-1.1046-.8954-2-2-2" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M17.7071 14.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L17.5858 17l-1.2929 1.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L19 18.4142l1.2929 1.2929c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L20.4142 17l1.2929-1.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L19 15.5858z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ColumnWideRemoveFilledIcon);
export default createLucideIcon('ColumnWideRemoveFilledIcon', ForwardRef);
