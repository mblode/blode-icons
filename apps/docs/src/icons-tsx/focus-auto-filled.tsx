import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FocusAutoFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M5 7c0-1.1046.8954-2 2-2h1c.5523 0 1-.4477 1-1s-.4477-1-1-1H7C4.7909 3 3 4.7909 3 7v1c0 .5523.4477 1 1 1s1-.4477 1-1zM16 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c1.1046 0 2 .8954 2 2v1c0 .5523.4477 1 1 1s1-.4477 1-1V7c0-2.2091-1.7909-4-4-4zM5 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 2.2091 1.7909 4 4 4h1c.5523 0 1-.4477 1-1s-.4477-1-1-1H7c-1.1046 0-2-.8954-2-2zM21 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v1c0 1.1046-.8954 2-2 2h-1c-.5523 0-1 .4477-1 1s.4477 1 1 1h1c2.2091 0 4-1.7909 4-4z" /><path fill="currentColor" fillRule="evenodd" d="M12.9104 8.8362a1.0001 1.0001 0 0 0-1.8208 0l-2.5 5.5c-.2285.5028-.0062 1.0956.4966 1.3242.5028.2285 1.0956.0062 1.3242-.4966l.4153-.9138h2.3486l.4153.9138c.2286.5028.8214.7251 1.3242.4966.5028-.2286.7251-.8214.4966-1.3242zm-.6452 3.4138h-.5304L12 11.6666z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(FocusAutoFilledIcon);
export default createLucideIcon('FocusAutoFilledIcon', ForwardRef);
