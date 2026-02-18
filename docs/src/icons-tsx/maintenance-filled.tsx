import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MaintenanceFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M22.0003 9.5c0 4.1421-3.3579 7.5-7.5 7.5-1.0332 0-2.0176-.2089-2.9132-.5868L7.0003 21c-1.1046 1.1046-2.8954 1.1046-4 0s-1.1046-2.8954 0-4l4.5868-4.5868c-.3779-.8956-.5868-1.88-.5868-2.9132 0-4.1421 3.3579-7.5 7.5-7.5.826 0 1.6209.1335 2.3641.3802.6335.2103.7509 1.0048.2789 1.4768L14.0003 7c-.8284.8284-.8284 2.1716 0 3s2.1716.8284 3 0l3.143-3.143c.472-.472 1.2665-.3546 1.4768.2789A7.49 7.49 0 0 1 22.0003 9.5" /></svg>;
const ForwardRef = forwardRef(MaintenanceFilledIcon);
export default createLucideIcon('MaintenanceFilledIcon', ForwardRef);
