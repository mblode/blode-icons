import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const DrinkIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m17.6662 12-.48 7.1996C17.0812 20.7755 15.7723 22 14.1929 22H9.8062c-1.5794 0-2.8883-1.2245-2.9934-2.8004L6.3328 12m11.3334 0 .2622-3.9335C17.9669 7.4893 17.5091 7 16.9306 7H7.0684c-.5785 0-1.0363.4893-.9978 1.0665L6.3328 12m11.3334 0H6.3329m5.6666-5V3l4.5-1" /></svg>;
const ForwardRef = forwardRef(DrinkIcon);
export default ForwardRef;
