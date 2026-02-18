import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VignetteFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 22c5.5228 0 10-4.4772 10-10S17.5228 2 12 2 2 6.4772 2 12s4.4772 10 10 10m0-13.5c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1m4.5 4.5c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1m-8-1c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1m3.5 5.5c.5523 0 1-.4477 1-1s-.4477-1-1-1-1 .4477-1 1 .4477 1 1 1M9.5251 8.111c.3905.3904.3905 1.0236 0 1.4141s-1.0237.3905-1.4142 0-.3905-1.0237 0-1.4142 1.0237-.3905 1.4142 0m6.364 1.4141c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0c-.3906.3905-.3906 1.0237 0 1.4142s1.0237.3905 1.4142 0m-6.364 4.9498c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0-.3905-1.0237 0-1.4142c.3905-.3906 1.0237-.3906 1.4142 0m6.364 1.4142c.3905-.3905.3905-1.0237 0-1.4142-.3905-.3906-1.0237-.3906-1.4142 0-.3906.3905-.3906 1.0237 0 1.4142s1.0237.3905 1.4142 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(VignetteFilledIcon);
export default createLucideIcon('VignetteFilledIcon', ForwardRef);
