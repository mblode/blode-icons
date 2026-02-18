import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MoneybagFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M3.8512 19.0302C3.2942 18.1904 3 17.178 3 16c.45-3.1505 2.5206-5.4907 4.753-7.75h8.5991C18.4405 10.4656 20.5457 12.82 21 16c0 1.178-.2942 2.1904-.8512 3.0302-.5531.834-1.326 1.4388-2.1944 1.8723C16.2468 21.7548 14.0585 22 12 22s-4.2468-.2452-5.9543-1.0975c-.8685-.4335-1.6413-1.0383-2.1945-1.8723M15.7567 5.5128c.5034-1.3423-.0111-2.911-1.4044-3.2482C13.6127 2.0856 12.8278 2 12 2s-1.6127.0856-2.3523.2646c-1.3933.3371-1.9077 1.906-1.4044 3.2482l.459 1.2239-.0356.0133h6.6666l-.0355-.0133z" /></svg>;
const ForwardRef = forwardRef(MoneybagFilledIcon);
export default createLucideIcon('MoneybagFilledIcon', ForwardRef);
