import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RoseIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9.2084c2.1209 2.4029 2 5.8064 2 8.7916m-2-8.7916c-1.1367-1.2879-2.5122-2.016-4.0245-2.3859C6.3661 6.429 5 7.8432 5 9.5V12c0 3.866 3.134 7 7 7s7-3.134 7-7V9.5c0-1.6568-1.3661-3.071-2.9755-2.6775-1.5123.3698-2.8878 1.098-4.0245 2.3859M12 19v2M8 6.3199c.7517-1.189 1.6935-2.339 3.0448-3.0765a1.996 1.996 0 0 1 1.9104 0c1.3513.7376 2.293 1.8875 3.0448 3.0765" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(RoseIcon);
export default ForwardRef;
