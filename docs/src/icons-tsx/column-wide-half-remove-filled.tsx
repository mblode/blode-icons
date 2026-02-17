import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColumnWideHalfRemoveFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 4C3.7909 4 2 5.7909 2 8v8c0 2.2091 1.7909 4 4 4h5c.5523 0 1-.4477 1-1s-.4477-1-1-1H6c-1.1046 0-2-.8954-2-2v-3h17c.5523 0 1-.4477 1-1V8c0-2.2091-1.7909-4-4-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M17.7071 16.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142L17.5858 19l-1.2929 1.2929c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L19 20.4142l1.2929 1.2929c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142L20.4142 19l1.2929-1.2929c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L19 17.5858z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ColumnWideHalfRemoveFilledIcon);
export default createLucideIcon('ColumnWideHalfRemoveFilledIcon', ForwardRef);
