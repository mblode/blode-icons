import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Car8FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M1 8c0-2.2091 1.7909-4 4-4h9.9536c1.2438 0 2.443.4636 3.3633 1.3003l3.0465 2.7695A5 5 0 0 1 23 11.7695V15c0 1.6014-1.2547 2.9097-2.8347 2.9955C19.6045 19.1804 18.398 20 17 20c-1.3962 0-2.6015-.8175-3.1632-2h-3.6736C9.6015 19.1825 8.3962 20 7 20c-1.398 0-2.6045-.8196-3.1653-2.0045C2.2547 17.9097 1 16.6014 1 15zm6 7c-.8284 0-1.5.6716-1.5 1.5S6.1716 18 7 18s1.5-.6716 1.5-1.5S7.8284 15 7 15m10 0c-.8284 0-1.5.6716-1.5 1.5S16.1716 18 17 18s1.5-.6716 1.5-1.5S17.8284 15 17 15" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Car8FilledIcon);
export default ForwardRef;
