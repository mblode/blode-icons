import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UmbrellaSecurityFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.002 3c0-.5523-.4478-1-1-1s-1 .4477-1 1v1.0372c-3.3037.247-6.2353 1.707-8.1626 3.905-.9621 1.0974-.942 2.4413-.283 3.4579C3.1837 12.3672 4.3493 13 5.6504 13h12.7029c1.3011 0 2.4667-.6328 3.0939-1.5999.6591-1.0166.6792-2.3605-.2829-3.4578-1.9273-2.198-4.8588-3.658-8.1622-3.905zM13.0021 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v3.0767a.9232.9232 0 0 1-1.8286.1811l-.1908-.9539c-.1083-.5416-.6351-.8928-1.1767-.7845-.5415.1083-.8928.6352-.7844 1.1767l.1907.9539C7.4857 21.0164 8.6854 22 10.079 22c1.6144 0 2.9232-1.3088 2.9232-2.9233z" /></svg>;
const ForwardRef = forwardRef(UmbrellaSecurityFilledIcon);
export default createLucideIcon('UmbrellaSecurityFilledIcon', ForwardRef);
