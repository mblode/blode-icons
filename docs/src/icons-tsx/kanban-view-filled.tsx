import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const KanbanViewFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 4C3.3432 4 2 5.3431 2 7v6c0 1.6569 1.3432 3 3 3s3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3M12 4c-1.6569 0-3 1.3431-3 3v10c0 1.6569 1.3431 3 3 3s3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3M19 4c-1.6569 0-3 1.3431-3 3v4c0 1.6569 1.3431 3 3 3s3-1.3431 3-3V7c0-1.6569-1.3431-3-3-3" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(KanbanViewFilledIcon);
export default ForwardRef;
