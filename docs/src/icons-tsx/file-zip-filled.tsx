import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileZipFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 2h4v4c0 2.2091 1.7909 4 4 4h4v8c0 2.2091-1.7909 4-4 4h-6v-2h2v-2h-2v-2h2v-2h-2v-2H8v2h2v2H8v2h2v2H8v2c-2.2091 0-4-1.7909-4-4V6c0-2.2091 1.7909-4 4-4" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M18.8284 6.9142c.3193.3193.579.687.772 1.0858H16c-1.1046 0-2-.8954-2-2V2.3996c.3988.193.7665.4527 1.0858.772z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FileZipFilledIcon);
export default createLucideIcon('FileZipFilledIcon', ForwardRef);
