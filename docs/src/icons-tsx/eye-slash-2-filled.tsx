import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EyeSlash2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M3.7052 2.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l2.8153 2.8154c-.6592.5283-1.286 1.1374-1.8726 1.8255-.4613.5413-.8975 1.1312-1.305 1.7692a3.499 3.499 0 0 0 .0005 3.7665c3.0208 4.7297 7.634 6.8035 12.0841 5.9169 1.0949-.2182 2.1666-.6141 3.1877-1.1835l3.09 3.09c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142l-2.8148-2.8148c1.1755-.9423 2.2509-2.1429 3.1767-3.592.7338-1.1484.7338-2.6239 0-3.7723C19.5069 6.1068 15.8036 4 11.9999 4c-1.7935 0-3.5646.4684-5.2041 1.3835zm6.6284 6.6284 4.745 4.745A3.485 3.485 0 0 0 15.4999 12c0-1.933-1.567-3.5-3.5-3.5a3.485 3.485 0 0 0-1.6663.4213m-4.9549.0451a11.3 11.3 0 0 1 1.152-1.0196l9.1875 9.1875a8.9 8.9 0 0 1-1.585.5866zM4.0848 10.501l7.4871 7.4871c-2.8934-.1509-5.8133-1.8243-7.9571-5.1809a1.499 1.499 0 0 1-.0004-1.6135 14.6 14.6 0 0 1 .4704-.6927" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(EyeSlash2FilledIcon);
export default createLucideIcon('EyeSlash2FilledIcon', ForwardRef);
