import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArCube3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20.5V18m0-12V3.5M6.598 9 4.5 7.7887m0 8.4226L6.598 15M19.5 16.2113 17.4019 15m0-6L19.5 7.7887m-1.7574-1.5585 1.4928.8397A1.5 1.5 0 0 1 20 8.3773V10m0 4v1.6227a1.5 1.5 0 0 1-.7646 1.3074l-1.4928.8397m-3.5635 2.0045-1.4437.812a1.5 1.5 0 0 1-1.4708 0l-1.4437-.812m-3.5635-2.0045-1.4928-.8397A1.5 1.5 0 0 1 4 15.6227V14m0-4V8.3773c0-.542.292-1.0416.7643-1.3072l1.4931-.84M9.821 4.2258l1.4437-.812a1.5 1.5 0 0 1 1.4708 0l1.4437.812M12 12v2m0-2-1.7321-1M12 12l1.7321-1" /></svg>;
const ForwardRef = forwardRef(ArCube3Icon);
export default createLucideIcon('ArCube3Icon', ForwardRef);
