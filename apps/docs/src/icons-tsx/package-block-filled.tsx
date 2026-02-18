import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PackageBlockFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 3H7C4.7909 3 3 4.7909 3 7v10c0 2.2091 1.7909 4 4 4h5.8096C11.6888 19.8321 11 18.2465 11 16.5c0-3.5899 2.9101-6.5 6.5-6.5 1.2886 0 2.4897.375 3.5 1.0218V7c0-2.2091-1.7909-4-4-4h-1v2.5C16 6.8807 14.8807 8 13.5 8h-3C9.1193 8 8 6.8807 8 5.5z" /><path fill="currentColor" d="M14 3h-4v2.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" /><path fill="currentColor" fillRule="evenodd" d="M20.682 13.318c-1.7574-1.7573-4.6066-1.7573-6.364 0s-1.7573 4.6066 0 6.364 4.6066 1.7573 6.364 0 1.7573-4.6066 0-6.364m-.8542 4.0956-3.2414-3.2414c.8972-.3515 1.9565-.1649 2.6814.56s.9115 1.7842.56 2.6814m-4.6556-1.8272 3.2414 3.2414c-.8972.3515-1.9565.1649-2.6814-.56s-.9115-1.7842-.56-2.6814" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(PackageBlockFilledIcon);
export default createLucideIcon('PackageBlockFilledIcon', ForwardRef);
