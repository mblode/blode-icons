import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Fire3FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.0142 1.708a1 1 0 0 0-1.5739.5236c-.5376 1.9292-1.64 2.9913-3.057 4.3563-.1909.1839-.3875.3733-.5892.571l-.0008.0008c-.6298.6188-1.2798 1.3197-1.8138 2.114-1.5848 2.3589-1.9743 5.0309-.7876 7.7172l.0005.0011c1.978 4.464 6.4058 5.7499 10.1046 4.6184 3.7131-1.136 6.7579-4.7123 6.118-9.8664-.1977-1.6054-.7404-3.2653-2.0816-4.5728a1 1 0 0 0-1.5201.1466c-.1401.2023-.4592.5923-.8418 1.0432-.0662-.8025-.2332-1.5745-.5169-2.3198-.6223-1.635-1.7691-3.0445-3.4404-4.3331" /></svg>;
const ForwardRef = forwardRef(Fire3FilledIcon);
export default createLucideIcon('Fire3FilledIcon', ForwardRef);
