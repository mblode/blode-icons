import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Import2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M17 4c-3.3137 0-6 2.6863-6 6v2.5858l-2.0429-2.0429c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l3.75 3.75c.3905.3905 1.0237.3905 1.4142 0l3.75-3.75c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0L13 12.5858V10c0-2.2091 1.7909-4 4-4h4c.5523 0 1-.4477 1-1s-.4477-1-1-1z" /><path fill="currentColor" d="M4 8c0-1.1046.8954-2 2-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1H6C3.7909 4 2 5.7909 2 8v8c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4V9c0-.5523-.4477-1-1-1s-1 .4477-1 1v7c0 1.1046-.8954 2-2 2H6c-1.1046 0-2-.8954-2-2z" /></svg>;
const ForwardRef = forwardRef(Import2FilledIcon);
export default createLucideIcon('Import2FilledIcon', ForwardRef);
