import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SolarPanelFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.9982 15h3.3406c2.5242 0 4.4173-2.3093 3.9223-4.7845L20.218 10h-7.2198zM10.9982 15v4h-6c-.5523 0-1 .4477-1 1s.4477 1 1 1h14c.5523 0 1-.4477 1-1s-.4477-1-1-1h-6v-4zM10.9982 15v-5H3.7784l-.0431.2155C3.2403 12.6907 5.1334 15 7.6576 15zM12.9982 8h6.8198l-.3569-1.7845C19.0872 4.3458 17.4455 3 15.5388 3h-2.5406zM10.9982 3v5H4.1784l.3569-1.7845C4.9093 4.3458 6.5509 3 8.4576 3z" /></svg>;
const ForwardRef = forwardRef(SolarPanelFilledIcon);
export default createLucideIcon('SolarPanelFilledIcon', ForwardRef);
