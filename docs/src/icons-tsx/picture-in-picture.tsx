import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PictureInPictureIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17H6c-1.6569 0-3-1.3431-3-3V8c0-1.6569 1.3431-3 3-3h10c1.6569 0 3 1.3431 3 3v3m-4.5 4h5c.8284 0 1.5.6716 1.5 1.5v2c0 .8284-.6716 1.5-1.5 1.5h-5c-.8284 0-1.5-.6716-1.5-1.5v-2c0-.8284.6716-1.5 1.5-1.5" /></svg>;
const ForwardRef = forwardRef(PictureInPictureIcon);
export default ForwardRef;
