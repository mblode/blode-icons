import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SoccerFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="m15.3145 4.7165-.9634.7c-1.4019 1.0185-3.3003 1.0185-4.7022 0l-.9634-.7A8.03 8.03 0 0 0 6.098 6.5994l.3672 1.13c.5355 1.6482-.0512 3.4536-1.4531 4.4722l-.962.699a7.94 7.94 0 0 0 .988 3.0437h1.19c1.733 0 3.2688 1.1158 3.8043 2.7639l.3678 1.132A8.04 8.04 0 0 0 12 20a8.04 8.04 0 0 0 1.5998-.1598l.3678-1.132c.5355-1.6481 2.0713-2.7639 3.8043-2.7639h1.19a7.94 7.94 0 0 0 .9881-3.0437l-.9621-.699c-1.4019-1.0185-1.9886-2.824-1.4531-4.4721l.3672-1.1301a8.025 8.025 0 0 0-2.5875-1.8829m-6.8481-2.074C9.5664 2.227 10.7578 2 12 2s2.4336.227 3.5336.6425c1.6917.6392 3.1632 1.7228 4.273 3.1074C21.1786 7.4616 22 9.6363 22 12q0 .2343-.0107.4664a9.95 9.95 0 0 1-1.6327 5.0279c-1.319 2.0025-3.3396 3.5039-5.7155 4.153A10.01 10.01 0 0 1 12 22a10.01 10.01 0 0 1-2.6411-.3527c-2.3759-.6491-4.3965-2.1505-5.7155-4.153a9.95 9.95 0 0 1-1.6327-5.0279A10 10 0 0 1 2 12c0-2.3637.8214-4.5384 2.1934-6.2501 1.1099-1.3846 2.5813-2.4682 4.273-3.1074m1.5192 6.585a3.427 3.427 0 1 1 4.0288 5.5451 3.427 3.427 0 0 1-4.0288-5.5451" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SoccerFilledIcon);
export default createLucideIcon('SoccerFilledIcon', ForwardRef);
