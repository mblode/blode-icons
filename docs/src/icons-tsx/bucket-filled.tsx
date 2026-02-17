import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BucketFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m3.6144 9 1.0643 8.4971C4.9294 19.4984 6.6307 21 8.6477 21h6.7046c2.0169 0 3.7183-1.5016 3.969-3.5028L20.3857 9zM3 3c-.5523 0-1 .4477-1 1v2c0 .5523.4477 1 1 1h18c.5523 0 1-.4477 1-1V4c0-.5523-.4477-1-1-1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BucketFilledIcon);
export default ForwardRef;
