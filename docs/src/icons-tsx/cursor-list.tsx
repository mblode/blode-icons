import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CursorListIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m11.8125 16.3125 2.8489-2.8489c.5201-.5201.3196-1.4048-.3738-1.6499L5.474 8.6979c-.7927-.2803-1.5564.4834-1.2762 1.276l3.1159 8.8137c.2451.6934 1.1298.8939 1.65.3738zm0 0L16.5 21M20 4h-9M20 8h-4" /></svg>;
const ForwardRef = forwardRef(CursorListIcon);
export default createLucideIcon('CursorListIcon', ForwardRef);
