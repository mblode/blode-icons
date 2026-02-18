import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FistbumpIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12.0017 6V4M8.1489 7.4037l-1.2856-1.532m9.0007 1.532 1.2856-1.5321M2 19h5.3517c1.513 0 2.7891-1.1266 2.9768-2.6279l.25-2c.2238-1.7905-1.1723-3.3721-2.9768-3.3721H7.5l-.7043-.4696a2.162 2.162 0 0 0-3.2062.9958L3 13.0001H2m20.0005 6h-5.3516c-1.513 0-2.7892-1.1266-2.9769-2.6279l-.25-2c-.2238-1.7905 1.1724-3.3721 2.9769-3.3721h.1016l.7044-.4696a2.1617 2.1617 0 0 1 3.2061.9958l.5895 1.4738h1" /></svg>;
const ForwardRef = forwardRef(FistbumpIcon);
export default createLucideIcon('FistbumpIcon', ForwardRef);
