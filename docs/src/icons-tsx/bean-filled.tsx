import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BeanFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M19.6354 4.1678C15.9861.6473 9.7497 1.5913 5.6705 5.6705c-3.518 3.518-4.704 8.6402-2.7058 12.3239.927-2.0841 2.1174-3.505 3.4825-4.529 1.6536-1.2403 3.5049-1.8466 5.1848-2.3967l.059-.0193c1.7396-.5697 3.2996-1.089 4.6706-2.1157 1.2559-.9405 2.4071-2.3536 3.2738-4.7659M4.3784 19.8454c3.6512 3.5041 9.8766 2.5573 13.9504-1.5166 3.5123-3.5123 4.7003-8.6239 2.7154-12.3062-.9297 2.075-2.1204 3.491-3.4838 4.512-1.6549 1.2393-3.506 1.8454-5.1852 2.3953l-.0617.0202c-1.7395.5697-3.298 1.0889-4.6662 2.1152-1.2559.9421-2.406 2.3586-3.269 4.7801" /></svg>;
const ForwardRef = forwardRef(BeanFilledIcon);
export default ForwardRef;
