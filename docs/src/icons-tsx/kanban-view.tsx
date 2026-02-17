import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const KanbanViewIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M10 7c0-1.1046.8954-2 2-2s2 .8954 2 2v10c0 1.1046-.8954 2-2 2s-2-.8954-2-2zM3 7c0-1.1046.8954-2 2-2s2 .8954 2 2v6c0 1.1046-.8954 2-2 2s-2-.8954-2-2zM17 7c0-1.1046.8954-2 2-2s2 .8954 2 2v4c0 1.1046-.8954 2-2 2s-2-.8954-2-2z" /></svg>;
const ForwardRef = forwardRef(KanbanViewIcon);
export default createLucideIcon('KanbanViewIcon', ForwardRef);
