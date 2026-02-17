import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Chart3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeWidth={2} d="M5.665 13.7773c-.9195 0-1.665.7455-1.665 1.665v2.8923c0 .9195.7454 1.665 1.665 1.665s1.665-.7455 1.665-1.665v-2.8923c0-.9195-.7454-1.665-1.665-1.665ZM11.995 9.334c-.9195 0-1.665.7454-1.665 1.665v7.3367c0 .9195.7455 1.665 1.665 1.665s1.665-.7455 1.665-1.6651V10.999c0-.9196-.7454-1.665-1.665-1.665ZM18.335 4c-.9196 0-1.665.7454-1.665 1.665v12.67c0 .9196.7454 1.665 1.665 1.665S20 19.2546 20 18.335V5.665C20 4.7455 19.2546 4 18.335 4Z" /></svg>;
const ForwardRef = forwardRef(Chart3Icon);
export default createLucideIcon('Chart3Icon', ForwardRef);
