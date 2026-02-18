import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CircleExclamationIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="lucide lucide-circle-alert" viewBox="0 0 24 24" ref={ref} {...props}><circle cx={12} cy={12} r={10} /><path d="M12 8v4M12 16h.01" /></svg>;
const ForwardRef = forwardRef(CircleExclamationIcon);
export default createLucideIcon('CircleExclamationIcon', ForwardRef);
