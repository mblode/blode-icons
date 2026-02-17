import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PaypalIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.0594 13.406c-.1277.6774-.6345 3.835-.784 4.7276-.011.0635-.0365.0882-.1095.0882H5.4455c-.2771 0-.4777-.2328-.4412-.4904l2.137-13.121c.0546-.3387.3682-.5963.7293-.5963 5.5538 0 6.0206-.1305 7.4392.4022 2.1916.822 2.3922 2.8049 1.6045 4.95-.784 2.2086-2.6438 3.1576-5.109 3.1859-1.5826.0247-2.5344-.247-2.746.8538m8.9598-5.077c-.0656-.0459-.0911-.0635-.1094.0459-.0729.4022-.1859.7938-.3209 1.1854-1.455 4.015-5.4882 3.6657-7.4574 3.6657-.2225 0-.3683.1165-.3975.3317-.8241 4.9534-.9882 5.9872-.9882 5.9872-.0365.2505.1276.4551.3865.4551h2.3156c.3137 0 .5726-.2223.6346-.5257.0255-.1905-.0402.2152.5251-3.2212.1677-.7761.5215-.695 1.0685-.695 2.5891 0 4.6093-1.0161 5.211-3.9621.2371-1.2277.1678-2.519-.8679-3.267" /></svg>;
const ForwardRef = forwardRef(PaypalIcon);
export default createLucideIcon('PaypalIcon', ForwardRef);
