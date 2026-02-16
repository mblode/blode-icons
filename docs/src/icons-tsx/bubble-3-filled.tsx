import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Bubble3FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C6.4772 2 2 6.4772 2 12c0 1.4889.326 2.9043.9116 4.1765a.12.12 0 0 1 .0113.0392.04.04 0 0 1 0 .0071c-.0004.0015 0 .0009 0 0l-.796 2.5575c-.593 1.9053 1.1755 3.7033 3.0904 3.142l2.687-.7877c.0022-.0002.0174-.0015.0445.0105C9.1885 21.695 10.56 22 12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Bubble3FilledIcon);
export default ForwardRef;
