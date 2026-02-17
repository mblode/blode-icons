import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Exposure1Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9M12 7v2.5m0 2.5V9.5m0 0H9.5m2.5 0h2.5M9.5 16h5" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Exposure1Icon);
export default ForwardRef;
