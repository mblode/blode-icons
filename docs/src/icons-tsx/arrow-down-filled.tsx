import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArrowDownFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 21c-.3978 0-.7793-.158-1.0606-.4393l-5.5-5.5c-.5858-.5858-.5858-1.5356 0-2.1214s1.5355-.5857 2.1213 0L10.5 15.8787V4.5c0-.8284.6716-1.5 1.5-1.5s1.5.6716 1.5 1.5v11.3787l2.9393-2.9394c.5858-.5857 1.5356-.5857 2.1214 0s.5857 1.5356 0 2.1214l-5.5 5.5A1.5 1.5 0 0 1 12 21" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArrowDownFilledIcon);
export default createLucideIcon('ArrowDownFilledIcon', ForwardRef);
