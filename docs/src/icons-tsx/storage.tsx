import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const StorageIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 4h8V2H8zm10 2v12h2V6zm-2 14H8v2h8zM6 18V6H4v12zm2-2h8v-2H8zm8 0c1.1046 0 2 .8954 2 2h2c0-2.2091-1.7909-4-4-4zm-8-2c-2.2091 0-4 1.7909-4 4h2c0-1.1046.8954-2 2-2zm0 6c-1.1046 0-2-.8954-2-2H4c0 2.2091 1.7909 4 4 4zm10-2c0 1.1046-.8954 2-2 2v2c2.2091 0 4-1.7909 4-4zM16 4c1.1046 0 2 .8954 2 2h2c0-2.2091-1.7909-4-4-4zM8 2C5.7909 2 4 3.7909 4 6h2c0-1.1046.8954-2 2-2z" /><path fill="currentColor" stroke="currentColor" strokeLinecap="square" strokeWidth={0.5} d="M15.25 18a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Zm-3 0a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" style={{
    fill: "currentColor",
    fillOpacity: 1,
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(StorageIcon);
export default createLucideIcon('StorageIcon', ForwardRef);
