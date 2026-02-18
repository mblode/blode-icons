import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ReviewIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M4 7c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v10c0 1.6569-1.3431 3-3 3H7c-1.6569 0-3-1.3431-3-3z" /><path fill="currentColor" d="M11.3075 7.9151c.2562-.616 1.1288-.616 1.385 0l.6525 1.5688a.75.75 0 0 0 .6325.4595l1.6936.1358c.665.0533.9347.8832.428 1.3172l-1.2903 1.1053a.75.75 0 0 0-.2416.7436l.3942 1.6527c.1548.6489-.5512 1.1618-1.1205.8141l-1.45-.8857a.75.75 0 0 0-.7818 0l-1.45.8857c-.5693.3477-1.2752-.1652-1.1205-.8141l.3943-1.6527a.75.75 0 0 0-.2416-.7436l-1.2904-1.1053c-.5066-.434-.237-1.2639.428-1.3172l1.6936-.1358a.75.75 0 0 0 .6325-.4596z" /></svg>;
const ForwardRef = forwardRef(ReviewIcon);
export default createLucideIcon('ReviewIcon', ForwardRef);
