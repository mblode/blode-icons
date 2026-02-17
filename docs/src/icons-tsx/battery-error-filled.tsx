import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BatteryErrorFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M5 5C2.7909 5 1 6.7909 1 9v6c0 2.2091 1.7909 4 4 4h11c1.8638 0 3.4299-1.2748 3.874-3h.626c1.3807 0 2.5-1.1193 2.5-2.5v-3C23 9.1193 21.8807 8 20.5 8h-.626C19.4299 6.2748 17.8638 5 16 5zm15 5v4h.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5zM7.7929 9.2929c.3905-.3905 1.0237-.3905 1.4142 0L10.5 10.5858l1.2929-1.293c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L11.9142 12l1.2929 1.2929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0L10.5 13.4142l-1.2929 1.2929c-.3905.3905-1.0237.3905-1.4142 0s-.3905-1.0237 0-1.4142L9.0858 12l-1.293-1.2929c-.3904-.3905-.3904-1.0237 0-1.4142" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BatteryErrorFilledIcon);
export default createLucideIcon('BatteryErrorFilledIcon', ForwardRef);
