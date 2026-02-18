import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Smartwatch2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="m17.4686 6.1611-.1781-1.6028C17.0654 2.5325 15.3532 1 13.315 1h-2.6298C8.647 1 6.9348 2.5325 6.7097 4.5583l-.178 1.6026C4.9744 7.62 4 9.6957 4 12c0 2.3033.9734 4.3793 2.5313 5.8389l.178 1.6028C6.9344 21.4675 8.6467 23 10.685 23h2.6297c2.0382 0 3.7505-1.5325 3.9755-3.5583l.1781-1.6022C19.0264 16.3798 20 14.3036 20 12c0-2.3042-.9744-4.38-2.5314-5.8389M8.7067 4.7074C9.712 4.2528 10.8275 4 12 4c1.1726 0 2.2882.2529 3.2935.7075C15.1495 3.7304 14.3099 3 13.315 3h-2.6298c-.9949 0-1.8345.7303-1.9785 1.7074m6.5864 14.5856C14.2888 19.7472 13.1739 20 12 20c-1.1741 0-2.2892-.2529-3.2936-.7073.144.977.9836 1.7073 1.9785 1.7073h2.6297c.9948 0 1.8343-.7301 1.9785-1.707M12 8c.5523 0 1 .4477 1 1v2.5858l1.2071 1.2071c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-1.5-1.5A1 1 0 0 1 11 12V9c0-.5523.4477-1 1-1" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(Smartwatch2FilledIcon);
export default createLucideIcon('Smartwatch2FilledIcon', ForwardRef);
