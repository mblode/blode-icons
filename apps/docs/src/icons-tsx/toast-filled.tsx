import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ToastFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 3c-2.6225 0-5.0462.5884-6.8496 1.5903C3.3808 5.5734 2 7.0913 2 9c0 1.4701.8257 2.7132 2 3.6468V17c0 2.2091 1.7909 4 4 4h8c2.2091 0 4-1.7909 4-4v-4.3532c1.1743-.9336 2-2.1767 2-3.6468 0-1.9088-1.3808-3.4266-3.1504-4.4097C17.0462 3.5884 14.6225 3 12 3" /></svg>;
const ForwardRef = forwardRef(ToastFilledIcon);
export default createLucideIcon('ToastFilledIcon', ForwardRef);
