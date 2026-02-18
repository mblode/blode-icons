import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EmojiSmileFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M22 12c0 5.5228-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2s10 4.4772 10 10M8.4648 14.1213c.3905-.3905 1.0237-.3905 1.4142 0 1.1715 1.1716 3.071 1.1716 4.2426 0 .3905-.3905 1.0237-.3905 1.4142 0 .3906.3905.3906 1.0237 0 1.4142-1.9526 1.9527-5.1184 1.9527-7.071 0-.3906-.3905-.3906-1.0237 0-1.4142M9.25 8.25C8.5596 8.25 8 8.8096 8 9.5s.5596 1.25 1.25 1.25 1.25-.5596 1.25-1.25-.5596-1.25-1.25-1.25M13.5 9.5c0-.6904.5596-1.25 1.25-1.25S16 8.8096 16 9.5s-.5596 1.25-1.25 1.25-1.25-.5596-1.25-1.25" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(EmojiSmileFilledIcon);
export default createLucideIcon('EmojiSmileFilledIcon', ForwardRef);
