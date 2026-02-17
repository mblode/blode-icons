import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CandyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5.9153 14.2873c.658 1.7497 2.0482 3.1399 3.7978 3.7979-.2175 1.1751-.5694 2.3448-1.0947 3.2851-.4964.8887-1.662.836-2.3818.1163l-3.7227-3.7227c-.7195-.7198-.7724-1.8857.1162-2.3818.9405-.525 2.1108-.8771 3.2852-1.0948M12.0002 7.0002c2.7615 0 5 2.2386 5 5s-2.2385 5-5 5c-2.7612-.0001-5-2.2387-5-5s2.2388-4.9998 5-5M15.3831 2.6301c.4961-.8886 1.6611-.8357 2.3808-.1162l3.7227 3.7227c.7197.7197.7726 1.8856-.1162 2.3818-.9408.525-2.1115.8761-3.2862 1.0937-.6582-1.7492-2.0474-3.139-3.7968-3.7968.2176-1.1746.5706-2.3446 1.0957-3.2852" /></svg>;
const ForwardRef = forwardRef(CandyFilledIcon);
export default ForwardRef;
