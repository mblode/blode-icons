import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CameraAutoFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m12 12.9166.2652.5834h-.5304z" /><path fill="currentColor" fillRule="evenodd" d="M7.7774 4.7812A4 4 0 0 1 11.1056 3h1.7888a4 4 0 0 1 3.3282 1.7812l.2393.3588a1.931 1.931 0 0 0 1.6069.86C20.2399 6 22 7.76 22 9.9312V17c0 2.2091-1.7909 4-4 4H6c-2.2091 0-4-1.7909-4-4V9.9313C2 7.76 3.76 6 5.9313 6a1.931 1.931 0 0 0 1.6068-.86zm5.133 5.305a1.0001 1.0001 0 0 0-1.8208 0l-2.5 5.5c-.2285.5028-.0062 1.0956.4966 1.3242.5028.2285 1.0956.0062 1.3242-.4966l.4153-.9138h2.3486l.4153.9138c.2286.5028.8214.7251 1.3242.4966.5028-.2286.7251-.8214.4966-1.3242z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CameraAutoFilledIcon);
export default createLucideIcon('CameraAutoFilledIcon', ForwardRef);
