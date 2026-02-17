import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Folder1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M6 3C3.7909 3 2 4.7909 2 7v9c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4v-6c0-2.2091-1.7909-4-4-4h-4.9296a1 1 0 0 1-.8321-.4453l-.8125-1.2188A3 3 0 0 0 8.9296 3z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Folder1FilledIcon);
export default createLucideIcon('Folder1FilledIcon', ForwardRef);
