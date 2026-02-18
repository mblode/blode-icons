import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BrokenHeartFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M10.6056 3.5614c-1.2408-.5725-2.5487-.6954-3.7744-.4221-1.928.4299-3.5627 1.8216-4.3416 3.7637-1.6042 3.9999.494 9.6897 9.0219 14.4695a1 1 0 0 0 .9779 0c8.5279-4.7798 10.626-10.4697 9.0218-14.4696-.7788-1.942-2.4135-3.3337-4.3416-3.7636-1.3667-.3048-2.8354-.117-4.1997.6376-1.0825 1.1653-1.8641 2.8697-1.96 4.8188l3.1342 3.1342-1.1954 3.5863c-.1747.5239-.741.8071-1.2649.6324-.524-.1746-.8071-.7409-.6325-1.2649l.8046-2.4136L9 9.4141V9c0-2.019.605-3.9193 1.6056-5.4386" /></svg>;
const ForwardRef = forwardRef(BrokenHeartFilledIcon);
export default createLucideIcon('BrokenHeartFilledIcon', ForwardRef);
