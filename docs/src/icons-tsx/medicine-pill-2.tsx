import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MedicinePill2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><ellipse cx={11.5} cy={9} stroke="currentColor" strokeWidth={2} rx={9.5} ry={4} style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /><path stroke="currentColor" strokeWidth={2} d="M2 9v6c0 2.2091 4.2533 4 9.5 4s9.5-1.7909 9.5-4V9M6 6l12 6" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(MedicinePill2Icon);
export default ForwardRef;
