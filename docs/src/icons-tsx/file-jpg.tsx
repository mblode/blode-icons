import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FileJpgIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 11V7c0-1.6569 1.3431-3 3-3h6.1716a2 2 0 0 1 1.4142.5858l2.8284 2.8284A2 2 0 0 1 19 8.8284V11m-5-6v2c0 1.1046.8954 2 2 2h2M9.5 20v-5h1.75c.8284 0 1.5.6716 1.5 1.5s-.6716 1.5-1.5 1.5H10M6.5 15v3.5c0 .8284-.6716 1.5-1.5 1.5h-.5M19.125 18.0548v1.3279c-.4228.4589-1.119.661-1.7347.6684-1.2422 0-2.1403-1.0673-2.1403-2.5166s.9448-2.5167 1.9981-2.5808c.3808-.0231 1.0184.0618 1.3778.4111" style={{
    stroke: "currentColor",
    strokeOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FileJpgIcon);
export default ForwardRef;
