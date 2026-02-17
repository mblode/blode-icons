import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PackageEditFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 3H7C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h5.1707A3 3 0 0 1 12 20.0001v-2.3334a3 3 0 0 1 .8787-2.1213l3.5-3.5c1.2509-1.2509 3.0372-1.6401 4.6213-1.1676V7c0-2.2091-1.7909-4-4-4h-1v3.5C16 7.8807 14.8807 9 13.5 9h-3C9.1193 9 8 7.8807 8 6.5z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M14 3h-4v3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M21.5404 13.4596c-1.0348-1.0348-2.7126-1.0348-3.7475 0l-3.5 3.5a1 1 0 0 0-.2929.7071v2.3334c0 .5522.4477 1 1 1h2.3333c.2652 0 .5196-.1054.7071-.2929l3.5-3.5c1.0349-1.0349 1.0349-2.7127 0-3.7476m-2.3333 1.4142a.65.65 0 0 1 .9191.9191l-3.2071 3.2072H16v-.9192z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PackageEditFilledIcon);
export default createLucideIcon('PackageEditFilledIcon', ForwardRef);
