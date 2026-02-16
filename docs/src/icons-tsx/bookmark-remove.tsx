import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BookmarkRemoveIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="m2 15 3-1.05M22 8l-3 1.05m0 0V6c0-1.6569-1.3431-3-3-3H8C6.3431 3 5 4.3431 5 6v7.95m14-4.9-14 4.9M19 14v5.9948c0 .8099-.9124 1.2839-1.575.8182l-3.6999-2.6005a3 3 0 0 0-3.4502 0L6.575 20.813C5.9124 21.2787 5 20.8047 5 19.9948V19" /></svg>;
const ForwardRef = forwardRef(BookmarkRemoveIcon);
export default ForwardRef;
