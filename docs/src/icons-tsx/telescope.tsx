import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TelescopeIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m6.1318 10.4209-3.289 1.1971c-.7784.2833-1.1798 1.1441-.8965 1.9225l.342.9397c.2834.7785 1.1442 1.1799 1.9226.8965l3.289-1.197" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.4268 7.4282 7.6681 8.7963c-1.038.3778-1.5732 1.5255-1.1954 2.5634l.684 1.8794c.3779 1.038 1.5255 1.5731 2.5635 1.1954l3.7588-1.3681M13.4347 5.6335l4.6985-1.7101c.7784-.2833 1.6392.118 1.9225.8965l1.7101 4.6985c.2834.7784-.118 1.6392-.8965 1.9225l-4.6984 1.7101c-1.2975.4723-2.7321-.1967-3.2043-1.4942l-1.0261-2.819c-.4722-1.2975.1967-2.732 1.4942-3.2043M11 20v-6M8 20h6" /></svg>;
const ForwardRef = forwardRef(TelescopeIcon);
export default createLucideIcon('TelescopeIcon', ForwardRef);
