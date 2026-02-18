import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ContrastFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 4v16a8.05 8.05 0 0 0 1.3301-.1101V4.1101A8.06 8.06 0 0 0 12 4m3.3301.7239v14.5522a8 8 0 0 0 1.3298-.7726V5.4965a8 8 0 0 0-1.3298-.7726m3.3298 2.8422v8.8678C19.5065 15.1648 20 13.64 20 12s-.4935-3.1648-1.3401-4.4339M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ContrastFilledIcon);
export default createLucideIcon('ContrastFilledIcon', ForwardRef);
