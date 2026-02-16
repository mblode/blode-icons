import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car4FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.4992 4H6.5406C4.5852 4 2.9165 5.4137 2.595 7.3424l-1.194 7.1644c-.274 1.6438.8378 3.1551 2.412 3.4438C4.3645 19.1596 5.5838 20 6.9994 20c1.3962 0 2.6014-.8175 3.1632-2h3.6736c.5617 1.1825 1.767 2 3.1632 2 1.3979 0 2.6045-.8196 3.1653-2.0045 1.5799-.0858 2.8346-1.3941 2.8346-2.9955v-2.4586c0-1.9554-1.4137-3.6241-3.3424-3.9456l-2.7028-.4505a1 1 0 0 1-.6356-.3864L14.6992 5.6a4 4 0 0 0-3.2-1.6m-4.5 11c-.8284 0-1.5.6716-1.5 1.5s.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5-.6715-1.5-1.5-1.5m8.5001 1.5c0-.8284.6715-1.5 1.5-1.5s1.5.6716 1.5 1.5-.6716 1.5-1.5 1.5-1.5-.6716-1.5-1.5" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Car4FilledIcon);
export default ForwardRef;
