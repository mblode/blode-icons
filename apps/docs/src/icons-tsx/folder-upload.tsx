import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FolderUploadIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 19h2c1.6569 0 3-1.3431 3-3v-6c0-1.6569-1.3431-3-3-3h-4.9296a2 2 0 0 1-1.6641-.8906l-.5157-.7735A3 3 0 0 0 8.3945 4H6C4.3431 4 3 5.3431 3 7v9c0 1.6569 1.3431 3 3 3h2m4 0v-6m0 0 2.5 2.5M12 13l-2.5 2.5" /></svg>;
const ForwardRef = forwardRef(FolderUploadIcon);
export default createLucideIcon('FolderUploadIcon', ForwardRef);
