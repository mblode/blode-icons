import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OperaIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M22 12.0124c0 2.9639-1.2936 5.6289-3.3335 7.472-2.5622 1.2454-4.9504.3736-5.7464-.1743 2.5125-.548 4.428-3.6115 4.428-7.2977s-1.9155-6.7496-4.428-7.2976c.796-.548 3.1842-1.4197 5.7464-.1743C20.7064 6.3835 22 9.0485 22 12.0124" /><path fill="currentColor" d="M8.7167 6.3587c-1.0946 1.2951-1.816 3.2378-1.8658 5.4047v.4732c.0498 2.1669.7712 4.1096 1.8657 5.4047 1.4429 1.868 3.5574 3.0386 5.9455 3.0386 1.4677 0 2.8359-.4483 4.0051-1.2204C16.901 21.0535 14.5626 22 12.0003 22h-.4726C6.229 21.7758 2 17.3923 2 12.0125 2 6.4832 6.4778 2 12.0003 2h.0498c2.5374 0 4.8502.9714 6.6164 2.5405-1.1691-.7721-2.5367-1.2204-4.0044-1.2204-2.3881 0-4.5275 1.1955-5.9455 3.0386" /></svg>;
const ForwardRef = forwardRef(OperaIcon);
export default createLucideIcon('OperaIcon', ForwardRef);
