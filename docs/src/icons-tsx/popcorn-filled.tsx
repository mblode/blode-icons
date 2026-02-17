import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PopcornFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.2846 7a2.24 2.24 0 0 0-.1953-.4283c-.2546-.4316-.6475-.7688-1.1178-.9593l-.0487-.0197a2.31 2.31 0 0 1-.7507-.491 2.26 2.26 0 0 1-.5014-.7354l-.0203-.048c-.1944-.4605-.5387-.8453-.9792-1.0946a2.35 2.35 0 0 0-1.4574-.2842l-.0562.0072a2.36 2.36 0 0 1-.9021-.058 2.34 2.34 0 0 1-.8108-.3919l-.0386-.0288A2.34 2.34 0 0 0 11.9993 2a2.34 2.34 0 0 0-1.4068.468l-.0438.0329a2.33 2.33 0 0 1-.808.3905 2.36 2.36 0 0 1-.8991.0578l-.058-.0075a2.35 2.35 0 0 0-1.4574.2844c-.4406.2495-.7847.6345-.9789 1.0951l-.0194.0462a2.26 2.26 0 0 1-.5016.7362 2.31 2.31 0 0 1-.7516.4912l-.0472.019c-.4703.1903-.8634.5273-1.1181.9588A2.24 2.24 0 0 0 3.7142 7zM4.1876 9a.5.5 0 0 0-.496.5636l1.1935 9.3093C5.1143 20.6608 6.6362 22 8.4388 22L7.674 9zM9.6775 9l.7647 13h3.1142l.7647-13zM16.3246 9l-.7647 13c1.8026 0 3.3245-1.3392 3.5537-3.1272l1.1935-9.3092A.5.5 0 0 0 19.8111 9z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PopcornFilledIcon);
export default createLucideIcon('PopcornFilledIcon', ForwardRef);
