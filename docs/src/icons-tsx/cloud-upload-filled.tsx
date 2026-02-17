import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudUploadFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5.5982 8.1649C6.686 5.7123 9.142 4 12 4c3.5571 0 6.4944 2.6531 6.9412 6.0884C21.2527 10.5287 23 12.5603 23 15c0 2.7614-2.2386 5-5 5h-5v-5.5858l.7929.7929c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-2.5-2.5c-.3905-.3905-1.0237-.3905-1.4142 0l-2.5 2.5c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0L11 14.4142V20H7c-3.3137 0-6-2.6863-6-6 0-2.8314 1.9604-5.2035 4.5982-5.8352" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CloudUploadFilledIcon);
export default createLucideIcon('CloudUploadFilledIcon', ForwardRef);
