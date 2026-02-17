import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AlbumsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M15.6502 5.062C14.3517 4.6157 13 5.5804 13 6.9534v10.0929c0 1.373 1.3517 2.3377 2.6502 1.8914l2-.6875A2 2 0 0 0 19 16.3588V7.6409a2 2 0 0 0-1.3498-1.8914zM11 6.9534c0-2.746 2.7035-4.6754 5.3003-3.7827l2 .6875C19.9155 4.4134 21 5.9329 21 7.6409v8.7179c0 1.708-1.0845 3.2275-2.6997 3.7828l-2 .6875C13.7035 21.7217 11 19.7923 11 17.0463zM8 3.9998c.5523 0 1 .4478 1 1V19c0 .5522-.4477 1-1 1s-1-.4478-1-1v-14c0-.5523.4477-1 1-1m-4 1c.5523 0 1 .4478 1 1V18c0 .5522-.4477 1-1 1s-1-.4478-1-1v-12c0-.5523.4477-1 1-1" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(AlbumsFilledIcon);
export default ForwardRef;
