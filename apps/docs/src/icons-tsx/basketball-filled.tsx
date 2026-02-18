import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BasketballFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4.1127 5.8491C2.98 7.2988 2.2387 9.0687 2.0469 11.0004h4.8887c-.2574-2.0645-1.3016-3.8848-2.823-5.1513M2.0469 13.0004c.1918 1.9317.9332 3.7017 2.0658 5.1513 1.5213-1.2665 2.5655-3.0867 2.823-5.1513zM5.4975 4.4008c1.9046 1.6306 3.189 3.9647 3.4506 6.5996h2.0494V2.0498c-2.0895.2075-3.9897 1.058-5.5 2.351M12.9975 2.0498v8.9506h2.0494c.2616-2.635 1.546-4.969 3.4506-6.5996-1.5103-1.293-3.4105-2.1435-5.5-2.351M19.8823 5.8491c-1.5213 1.2665-2.5655 3.0868-2.8229 5.1513h4.8887c-.1918-1.9317-.9332-3.7016-2.0658-5.1513M21.9481 13.0004h-4.8887c.2574 2.0646 1.3016 3.8848 2.8229 5.1513 1.1326-1.4496 1.874-3.2196 2.0658-5.1513M18.4975 19.6c-1.5103 1.293-3.4105 2.1436-5.5 2.3511v-8.9507h2.0494c.2616 2.635 1.546 4.9691 3.4506 6.5996M10.9975 21.9511v-8.9507H8.9481c-.2616 2.635-1.546 4.9691-3.4506 6.5996 1.5103 1.293 3.4105 2.1436 5.5 2.3511" /></svg>;
const ForwardRef = forwardRef(BasketballFilledIcon);
export default createLucideIcon('BasketballFilledIcon', ForwardRef);
