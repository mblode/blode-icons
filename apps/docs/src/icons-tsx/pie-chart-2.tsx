import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PieChart2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13c0 4.4183-3.5817 8-8 8s-8-3.5817-8-8 3.5817-8 8-8v5.6c0 .8401 0 1.2601.1635 1.581.1438.2822.3733.5117.6555.6555C12.1399 13 12.5599 13 13.4 13zM20.7385 8.0982c-.6584-2.3368-2.4995-4.178-4.8363-4.8363-.2689-.0757-.4033-.1136-.5399-.0745-.1109.0318-.227.1197-.2876.2178C15 3.5261 15 3.682 15 3.994v4.2065c0 .28 0 .42.0545.527a.5.5 0 0 0 .2185.2185c.107.0545.247.0545.527.0545h4.2065c.3119 0 .4678 0 .5887-.0747.0981-.0606.186-.1767.2178-.2876.0391-.1366.0012-.271-.0745-.5399" /></svg>;
const ForwardRef = forwardRef(PieChart2Icon);
export default createLucideIcon('PieChart2Icon', ForwardRef);
