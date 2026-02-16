import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HomeRoofIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m5 7.5114 6.0686-4.3446c.3351-.2399.5026-.3598.6854-.4062.1615-.041.3306-.041.492 0 .1828.0464.3503.1663.6854.4062L19 7.5114m-14 0V15.2c0 1.6802 0 2.5202.327 3.162a3 3 0 0 0 1.311 1.311C7.2798 20 8.12 20 9.8 20h4.4c1.6802 0 2.5203 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 17.7202 19 16.8802 19 15.2V7.5114m-14 0L2.5 9.3012M19 7.5114l2.5 1.7898" /></svg>;
const ForwardRef = forwardRef(HomeRoofIcon);
export default ForwardRef;
