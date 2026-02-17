import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FolderBookmarksFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M2 7c0-2.2091 1.7909-4 4-4h2.9296a3 3 0 0 1 2.4962 1.3359l.8125 1.2188A1 1 0 0 0 13.0704 6H18c2.2091 0 4 1.7909 4 4v6c0 2.2091-1.7909 4-4 4h-8v-6c0-1.6569-1.3431-3-3-3H2z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M1 15c0-1.1046.8954-2 2-2h3c1.1046 0 2 .8954 2 2v5a1 1 0 0 1-1.5145.8575L4.5 19.6662l-1.9855 1.1913A1 1 0 0 1 1 20zm5 0H3v3.2338l.9855-.5913a1 1 0 0 1 1.029 0L6 18.2338z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FolderBookmarksFilledIcon);
export default createLucideIcon('FolderBookmarksFilledIcon', ForwardRef);
