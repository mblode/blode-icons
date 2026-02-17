import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 4c-4.4183 0-8 3.5817-8 8s3.5817 8 8 8c.5523 0 1 .4477 1 1s-.4477 1-1 1C6.4772 22 2 17.5228 2 12S6.4772 2 12 2s10 4.4772 10 10c0 3.0376-2.4624 5.5-5.5 5.5S11 15.0376 11 12c0-.5523.4477-1 1-1s1 .4477 1 1c0 1.933 1.567 3.5 3.5 3.5S20 13.933 20 12c0-4.4183-3.5817-8-8-8" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CircleFilledIcon);
export default ForwardRef;
