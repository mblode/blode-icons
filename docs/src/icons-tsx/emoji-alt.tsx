import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EmojiAltIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.4 9.5h.2m4.8 0h.2m3.3 3.5c-.3977 1.9591-1.9409 3.5023-3.9 3.9M9 9.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m5 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m7 2.5c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9" /></svg>;
const ForwardRef = forwardRef(EmojiAltIcon);
export default createLucideIcon('EmojiAltIcon', ForwardRef);
