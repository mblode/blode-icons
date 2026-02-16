import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SlidesTallFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 2C5.7909 2 4 3.7909 4 6v8c0 2.2091 1.7909 4 4 4 0 2.2091 1.7909 4 4 4h4c2.2091 0 4-1.7909 4-4v-8c0-2.2091-1.7909-4-4-4 0-2.2091-1.7909-4-4-4zm4 4h2c0-1.1046-.8954-2-2-2H8c-1.1046 0-2 .8954-2 2v8c0 1.1046.8954 2 2 2v-6c0-2.2091 1.7909-4 4-4" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SlidesTallFilledIcon);
export default ForwardRef;
