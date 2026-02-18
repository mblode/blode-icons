import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const QuoteIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5.8839 21.7548q-1.7032 0-2.7871-.6967T1.316 19.2774Q.542 17.9614.2323 16.5677 0 15.0968 0 14.1677q0-3.7935 1.9355-6.8903t6.0387-5.0322l.6968 1.3935q-2.4 1.0065-4.1807 3.1742-1.7032 2.1678-1.7032 4.4129 0 .929.2323 1.6258 1.2387-1.0064 2.8645-1.0064 2.013 0 3.4838 1.3161 1.471 1.3161 1.471 3.6387 0 2.1678-1.471 3.5613T5.884 21.7548m13.1613 0q-1.7033 0-2.7871-.6967-1.084-.6968-1.7807-1.7807-.7742-1.316-1.0839-2.7097-.2322-1.4709-.2322-2.4 0-3.7935 1.9355-6.8903t6.0387-5.0322l.6968 1.3935q-2.4 1.0065-4.1807 3.1742-1.7032 2.1678-1.7032 4.4129 0 .929.2322 1.6258 1.2388-1.0064 2.8646-1.0064 2.0129 0 3.4838 1.3161Q24 14.4774 24 16.8q0 2.1678-1.471 3.5613t-3.4838 1.3935" /></svg>;
const ForwardRef = forwardRef(QuoteIcon);
export default createLucideIcon('QuoteIcon', ForwardRef);
