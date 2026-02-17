import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DumbellIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4.2206 17.6564 2.1213 2.1213c.5858.5858 1.5355.5858 2.1213 0s.5858-1.5356 0-2.1213L6.342 15.535c-.5858-.5857-1.5355-.5857-2.1213 0s-.5858 1.5356 0 2.1214M19.7796 6.3439l-2.1213-2.1214c-.5858-.5857-1.5355-.5857-2.1213 0s-.5858 1.5356 0 2.1214l2.1213 2.1213c.5858.5858 1.5356.5858 2.1213 0s.5858-1.5355 0-2.1213M4.576 13.7677c-.5857-.5858-.5857-1.5355 0-2.1213s1.5356-.5858 2.1214 0l5.6568 5.6568c.5858.5858.5858 1.5356 0 2.1213s-1.5355.5858-2.1213 0zM11.6464 6.6974c-.5858-.5858-.5858-1.5356 0-2.1213s1.5355-.5858 2.1213 0l5.6568 5.6568c.5858.5858.5858 1.5355 0 2.1213s-1.5355.5858-2.1213 0zM9.1719 12.7075l4.2426-4.2427M11.293 14.8286l4.2426-4.2427" /></svg>;
const ForwardRef = forwardRef(DumbellIcon);
export default ForwardRef;
