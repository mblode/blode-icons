import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CurrencyPoundsFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13.5156 3c1.812.0002 3.4159.8783 4.4248 2.2236l.1934.2754.0654.1104c.2933.561.1196 1.2645-.4199 1.621-.54.3565-1.2555.2396-1.6563-.251l-.0751-.1034-.1084-.1533c-.5613-.7488-1.4415-1.2225-2.4239-1.2227-1.6675 0-3.0488 1.3756-3.0488 3.1094 0 .5542.0729 1.3558.1514 2.3906H13.75l.1279.0068c.6303.0641 1.1221.596 1.1221 1.2432s-.4918 1.1791-1.1221 1.2432L13.75 13.5h-2.9971c.0124.5936.0075 1.1972-.0293 1.7871-.0675 1.0833-.2457 2.2295-.6777 3.2129H17.75l.1279.0068c.6303.0641 1.1221.596 1.1221 1.2432s-.4918 1.1791-1.1221 1.2432L17.75 21H6.25C5.5596 21 5 20.4404 5 19.75s.5596-1.25 1.25-1.25h.1006c.6393-.0001.9916-.2485 1.2705-.7305.3333-.5762.535-1.4772.6074-2.6377.033-.5273.0363-1.0773.0235-1.6318H6.25c-.6904 0-1.25-.5596-1.25-1.25S5.5596 11 6.25 11h1.8604c-.0704-.9051-.1436-1.779-.1436-2.3906C7.9668 5.5279 10.4346 3 13.5156 3" /></svg>;
const ForwardRef = forwardRef(CurrencyPoundsFilledIcon);
export default createLucideIcon('CurrencyPoundsFilledIcon', ForwardRef);
