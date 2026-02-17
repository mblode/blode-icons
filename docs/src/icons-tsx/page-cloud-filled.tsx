import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageCloudFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 2C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h3.1674C10.1326 20.8848 9.5 19.3913 9.5 17.75c0-3.4518 2.7982-6.25 6.25-6.25 1.6432 0 3.1372.6353 4.25 1.6678V6c0-2.2091-1.7909-4-4-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M15.75 13.5c-2.3472 0-4.25 1.9028-4.25 4.25S13.4028 22 15.75 22h2.75c1.933 0 3.5-1.567 3.5-3.5 0-1.7554-1.2923-3.2089-2.9773-3.4612-.778-.9383-1.9543-1.5388-3.2727-1.5388m-2.25 4.25c0-1.2426 1.0074-2.25 2.25-2.25.7961 0 1.4953.4122 1.8966 1.0391A1 1 0 0 0 18.491 17h.009c.828.0005 1.5.6719 1.5 1.5 0 .8284-.6716 1.5-1.5 1.5h-2.75c-1.2426 0-2.25-1.0074-2.25-2.25" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PageCloudFilledIcon);
export default createLucideIcon('PageCloudFilledIcon', ForwardRef);
