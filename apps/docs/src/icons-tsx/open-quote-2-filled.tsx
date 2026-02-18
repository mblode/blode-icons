import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OpenQuote2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M18 19.9953c2.2091 0 4-1.7908 4-4v-2.2307c0-1.8181-1.2872-3.3356-3-3.6907V4.9953a1 1 0 0 0-.4304-.8219c-.5695-.3946-1.1758-.0313-1.6849.255a8.16 8.16 0 0 0-1.5686 1.1499C14.1618 6.6604 13 8.41 13 10.9953v5.001c0 2.2096 1.7913 3.999 4 3.999zM7 19.9953c2.2091 0 4-1.7908 4-4v-2.2307c0-1.8181-1.2872-3.3356-3-3.6907V4.9953a1 1 0 0 0-.4304-.8219c-.5695-.3946-1.1758-.0313-1.6849.255a8.16 8.16 0 0 0-1.5686 1.1499C3.1618 6.6604 2 8.41 2 10.9953v5.001c0 2.2096 1.7913 3.999 4 3.999z" /></svg>;
const ForwardRef = forwardRef(OpenQuote2FilledIcon);
export default createLucideIcon('OpenQuote2FilledIcon', ForwardRef);
