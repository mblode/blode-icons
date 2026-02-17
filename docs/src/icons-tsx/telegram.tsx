import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TelegramIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M1.581 10.6794q9.2627-4.0218 12.3502-5.3029c5.884-2.4386 7.1051-2.8622 7.9026-2.8764.1754-.003.5659.0403.8207.2458.2118.1732.2714.4074.3012.5716.0265.1643.0629.5387.0332.831-.3177 3.3381-1.6977 11.4388-2.3993 15.1778-.2945 1.5821-.8803 2.1125-1.4462 2.1643-1.2311.1128-2.1643-.8102-3.3557-1.5884-1.8631-1.2181-2.9154-1.9762-4.7256-3.1646-2.0915-1.3736-.7347-2.1286.4567-3.3623.311-.3229 5.7316-5.2362 5.8342-5.6818.0133-.0558.0266-.2636-.0992-.3731-.1224-.1099-.3046-.0723-.4369-.0426-.1887.0423-3.1637 2.0043-8.9351 5.8857-.844.5786-1.6083.8606-2.2967.8458-.7545-.0162-2.2105-.4262-3.2926-.7765C.9687 12.803-.087 12.5757.0057 11.8457c.0463-.38.5726-.7689 1.5753-1.1663" /></svg>;
const ForwardRef = forwardRef(TelegramIcon);
export default createLucideIcon('TelegramIcon', ForwardRef);
