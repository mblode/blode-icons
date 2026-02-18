import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Group1FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.501 6.5c0-2.4853-2.0147-4.5-4.5-4.5-2.4852 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5 4.5-2.0147 4.5-4.5M17.501 6.5c0-1.3807-1.1193-2.5-2.5-2.5-.5523 0-1-.4477-1-1s.4477-1 1-1c2.4853 0 4.5 2.0147 4.5 4.5s-2.0147 4.5-4.5 4.5c-.5523 0-1-.4477-1-1s.4477-1 1-1c1.3807 0 2.5-1.1193 2.5-2.5M16.8126 19.7597C16.1479 20.5351 15.0993 21 14.001 21h-10c-1.0983 0-2.1469-.4649-2.8116-1.2403-.6943-.8099-.9569-1.9664-.3671-3.1053C2.2676 13.8632 5.4236 12 9.001 12s6.7335 1.8632 8.1787 4.6544c.5898 1.1389.3272 2.2954-.3671 3.1053M18.3352 12.5662c-.5206-.1844-1.0921.0882-1.2765.6087s.0881 1.0921.6087 1.2765c1.8447.6534 3.2569 1.9485 3.9166 3.5055.1029.2429.0589.4485-.1118.6425-.194.2203-.5495.4006-.9709.4006-.5523 0-1 .4477-1 1s.4477 1 1 1c.9593 0 1.8748-.4007 2.4721-1.0791.6204-.7049.8878-1.7159.4521-2.7443-.9031-2.1315-2.7791-3.7918-5.0903-4.6104" /></svg>;
const ForwardRef = forwardRef(Group1FilledIcon);
export default createLucideIcon('Group1FilledIcon', ForwardRef);
