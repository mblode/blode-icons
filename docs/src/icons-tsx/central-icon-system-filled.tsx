import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CentralIconSystemFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C6.4772 2 2 6.4772 2 12s4.4772 10 10 10c5.0751 0 9.2672-3.7807 9.9136-8.6792h-6.3287L12 16.9057 7.0943 12 12 7.0943l3.5849 3.5849h6.3287C21.2672 5.7807 17.0751 2 12 2" /></svg>;
const ForwardRef = forwardRef(CentralIconSystemFilledIcon);
export default createLucideIcon('CentralIconSystemFilledIcon', ForwardRef);
