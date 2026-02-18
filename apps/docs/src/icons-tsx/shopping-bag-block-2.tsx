import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ShoppingBagBlock2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.9999 8V6c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3v2m0 13H7.9967c-1.8386 0-3.2447-1.6389-2.965-3.4562l1.0769-7C6.3337 9.0803 7.593 8 9.0736 8h6.4028c1.1641 0 2.1542.8494 2.3312 2m2.0207 10.8284-5.6568-5.6568m5.6568 5.6568c.7574-.7573 1.1475-1.7428 1.1705-2.7351.0245-1.0546-.3657-2.117-1.1705-2.9217-.7573-.7574-1.7428-1.1476-2.7353-1.1705-1.0545-.0244-2.1168.3657-2.9215 1.1705m5.6568 5.6568c-.7573.7574-1.7428 1.1476-2.7353 1.1705-1.0545.0244-2.1168-.3657-2.9215-1.1705-.7574-.7573-1.1475-1.7428-1.1705-2.7351-.0245-1.0546.3657-2.117 1.1705-2.9217" /></svg>;
const ForwardRef = forwardRef(ShoppingBagBlock2Icon);
export default createLucideIcon('ShoppingBagBlock2Icon', ForwardRef);
