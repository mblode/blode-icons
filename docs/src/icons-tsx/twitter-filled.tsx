import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TwitterFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M23.25 5.1313c-.8274.3608-1.7163.6047-2.6507.715.9532-.562 1.6845-1.4534 2.0294-2.5147a9.3 9.3 0 0 1-2.9312 1.1022C18.8552 3.5521 17.6562 3 16.3284 3c-2.5487 0-4.6158 2.0347-4.6158 4.5454 0 .355.0417.7003.1189 1.0339C7.9937 8.389 4.5938 6.5797 2.3167 3.831c-.3964.673-.6243 1.4534-.6243 2.2844 0 1.5763.8155 2.9682 2.0532 3.7826a4.66 4.66 0 0 1-2.0909-.5686v.0585c0 2.2015 1.5905 4.0381 3.7031 4.4556a4.72 4.72 0 0 1-1.2159.158 4.7 4.7 0 0 1-.869-.08c.5876 1.8045 2.292 3.1194 4.3125 3.1545-1.5805 1.2192-3.5713 1.9459-5.7335 1.9459A9.6 9.6 0 0 1 .75 18.9585C2.7933 20.2489 5.219 21 7.8252 21 16.3175 21 20.96 14.0766 20.96 8.072c0-.195-.005-.392-.0139-.5871.9017-.6418 1.6846-1.4407 2.3019-2.3507z" /></svg>;
const ForwardRef = forwardRef(TwitterFilledIcon);
export default createLucideIcon('TwitterFilledIcon', ForwardRef);
