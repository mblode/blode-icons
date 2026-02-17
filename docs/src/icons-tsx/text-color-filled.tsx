import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TextColorFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M10.9064 4.5771a1 1 0 0 0-1.8123 0l-7 15c-.2336.5005-.0172 1.0955.4833 1.3291.5004.2335 1.0955.0172 1.329-.4833l2.0642-4.4233A1 1 0 0 0 6.0002 16h8a1 1 0 0 0 .0296-.0004l2.0643 4.4233c.2335.5005.8286.7168 1.329.4833.5005-.2336.7169-.8286.4833-1.3291zm-.9062 2.7876L13.0967 14h-6.193z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M19.2244 2.3103a1 1 0 0 0-1.4483 0l-.0014.0015-.0022.0024-.0072.0076-.0248.0264a12 12 0 0 0-.0876.0953 16 16 0 0 0-.3025.3432c-.2476.2888-.5796.6954-.9139 1.1633-.332.4649-.68 1.0095-.9485 1.5732-.2613.5487-.4878 1.1984-.4878 1.8518 0 1.8345 1.4987 3.625 3.5 3.625s3.5-1.7905 3.5-3.625c0-.6534-.2264-1.3031-.4877-1.8518-.2685-.5637-.6165-1.1083-.9485-1.5732-.3343-.468-.6663-.8745-.9139-1.1633a16 16 0 0 0-.3025-.3432 12 12 0 0 0-.0876-.0953l-.0248-.0264-.0072-.0076-.0023-.0024z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(TextColorFilledIcon);
export default createLucideIcon('TextColorFilledIcon', ForwardRef);
