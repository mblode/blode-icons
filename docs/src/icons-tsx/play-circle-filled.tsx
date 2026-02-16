import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PlayCircleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10M10.7817 8.783c-.3319-.2263-.7817.0114-.7817.413v5.6079c0 .4017.4498.6394.7817.4131l4.1124-2.8039c.2911-.1985.2911-.6277 0-.8262z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PlayCircleFilledIcon);
export default ForwardRef;
