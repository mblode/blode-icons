import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const AutoFlashIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinejoin="round" strokeWidth={2} d="M19.5657 9H13.5a.5.5 0 0 1-.5-.5V2.4014c0-.4947-.6416-.689-.916-.2774L4.0182 14.2226c-.2215.3323.0167.7774.416.7774H10.5a.5.5 0 0 1 .5.5v6.0986c0 .4947.6416.689.916.2774l8.0658-12.0987C20.2033 9.4452 19.9651 9 19.5657 9Z" /><path fill="currentColor" d="M15.9088 21.4592c-.2986.4646-.1641 1.0833.3004 1.382s1.0833.1641 1.382-.3004zM21.25 15l.9778-.2095a1 1 0 0 0-1.819-.3313zm.5222 7.2095c.1157.5401.6473.884 1.1873.7683s.884-.6473.7683-1.1873zm-4.181.3313 4.5-7-1.6824-1.0816-4.5 7zm2.681-7.3313 1.5 7 1.9556-.419-1.5-7zM18 21.5h4v-2h-4z" /></svg>;
const ForwardRef = forwardRef(AutoFlashIcon);
export default ForwardRef;
