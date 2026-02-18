import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Chart3FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M15.6699 5.665c0-1.4718 1.1932-2.665 2.665-2.665s2.665 1.1932 2.665 2.665v12.67c0 1.4718-1.1931 2.665-2.665 2.665s-2.665-1.1932-2.665-2.665zM11.9951 8.334c-1.4719 0-2.665 1.1932-2.665 2.665v7.3367c0 1.4718 1.1931 2.665 2.665 2.665s2.665-1.1932 2.665-2.6651V10.999c0-1.4718-1.1932-2.665-2.665-2.665M5.665 12.7773c-1.4718 0-2.665 1.1932-2.665 2.665v2.8923c0 1.4718 1.1932 2.665 2.665 2.665s2.665-1.1932 2.665-2.665v-2.8923c0-1.4718-1.1932-2.665-2.665-2.665" /></svg>;
const ForwardRef = forwardRef(Chart3FilledIcon);
export default createLucideIcon('Chart3FilledIcon', ForwardRef);
