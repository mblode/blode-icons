import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GithubFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 1.9507c5.525 0 10 4.475 10 10a10.016 10.016 0 0 1-6.8125 9.4875c-.5.1-.6875-.2125-.6875-.475 0-.3375.0125-1.4125.0125-2.75 0-.9375-.3125-1.5375-.675-1.85 2.225-.25 4.5625-1.1 4.5625-4.9375 0-1.1-.3875-1.9875-1.025-2.6875.1-.25.45-1.275-.1-2.65 0 0-.8375-.275-2.75 1.025-.8-.225-1.65-.3375-2.5-.3375s-1.7.1125-2.5.3375c-1.9125-1.2875-2.75-1.025-2.75-1.025-.55 1.375-.2 2.4-.1 2.65-.6375.7-1.025 1.6-1.025 2.6875 0 3.825 2.325 4.6875 4.55 4.9375-.2875.25-.55.6875-.6375 1.3375-.575.2625-2.0125.6875-2.9125-.825-.1875-.3-.75-1.0375-1.5375-1.025-.8375.0125-.3375.475.0125.6625.425.2375.9125 1.125 1.025 1.4125.2.5625.85 1.6375 3.3625 1.175 0 .8375.0125 1.625.0125 1.8625 0 .2625-.1875.5625-.6875.475A9.994 9.994 0 0 1 2 11.9507c0-5.525 4.475-10 10-10" /></svg>;
const ForwardRef = forwardRef(GithubFilledIcon);
export default createLucideIcon('GithubFilledIcon', ForwardRef);
