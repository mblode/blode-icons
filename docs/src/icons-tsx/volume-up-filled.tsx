import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VolumeUpFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.7196 3.5985C11.0223 2.5129 13 3.4393 13 5.1349v13.7299c0 1.6957-1.9777 2.622-3.2804 1.5365l-3.8035-3.1696a1 1 0 0 0-.6402-.2318H4c-1.6568 0-3-1.3432-3-3v-4c0-1.6569 1.3432-3 3-3h1.2759a1 1 0 0 0 .6402-.2318zM20 9c0-.5523-.4477-1-1-1s-1 .4477-1 1v2h-2c-.5523 0-1 .4477-1 1s.4477 1 1 1h2v2c0 .5523.4477 1 1 1s1-.4477 1-1v-2h2c.5523 0 1-.4477 1-1s-.4477-1-1-1h-2z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(VolumeUpFilledIcon);
export default ForwardRef;
