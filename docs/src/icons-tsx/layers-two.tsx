import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LayersTwoIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth={2} d="m7.9004 12.0002-4.3076 2.1012c-.7487.3652-.7487 1.4323 0 1.7975l7.9691 3.8874a1 1 0 0 0 .8769 0l7.9691-3.8874c.7487-.3652.7487-1.4323 0-1.7975l-4.3075-2.1012m-8.2 0L3.5928 9.8989c-.7487-.3652-.7487-1.4323 0-1.7975L11.562 4.214c.2767-.135.6002-.135.8769 0l7.9691 3.8874c.7487.3652.7487 1.4323 0 1.7975l-4.3075 2.1013m-8.2 0 3.6615 1.7861a1 1 0 0 0 .8769 0l3.6616-1.7861" /></svg>;
const ForwardRef = forwardRef(LayersTwoIcon);
export default createLucideIcon('LayersTwoIcon', ForwardRef);
