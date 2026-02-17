import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShieldKeyholeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9c-.8284 0-1.5.6716-1.5 1.5S11.1716 12 12 12s1.5-.6716 1.5-1.5S12.8284 9 12 9m0 0v6m8-3.0877v-4.735a2 2 0 0 0-1.3498-1.8913l-5.675-1.9508a3 3 0 0 0-1.9504 0L5.3498 5.286A2 2 0 0 0 4 7.1774v4.7349C4 16.8848 8 19 12 21.1579c4-2.1579 8-4.2731 8-9.2456" /></svg>;
const ForwardRef = forwardRef(ShieldKeyholeIcon);
export default createLucideIcon('ShieldKeyholeIcon', ForwardRef);
