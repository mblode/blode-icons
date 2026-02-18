import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CloudyIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.1474 6.9202C11.6186 5.2356 13.165 4 15 4c2.2091 0 4 1.7909 4 4a3.98 3.98 0 0 1-.5351 2M16.5 10c-.3699 0-.7294.0446-1.0733.1288-.5523.1351-1.167-.0735-1.4907-.5409-.7017-1.0132-1.7073-1.7999-2.885-2.2282A5.99 5.99 0 0 0 9 7c-3.3137 0-6 2.6863-6 6s2.6863 6 6 6h7.5c2.4853 0 4.5-2.0147 4.5-4.5 0-1.869-1.1394-3.4718-2.7614-4.1518A4.49 4.49 0 0 0 16.5 10" /></svg>;
const ForwardRef = forwardRef(CloudyIcon);
export default createLucideIcon('CloudyIcon', ForwardRef);
