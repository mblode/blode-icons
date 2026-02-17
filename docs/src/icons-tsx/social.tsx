import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SocialIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path stroke="currentColor" strokeWidth={2} d="M8 6c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2ZM20 6c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2ZM20 17c0 1.1046-.8954 2-2 2s-2-.8954-2-2 .8954-2 2-2 2 .8954 2 2ZM11 16c0 2.2091-1.7909 4-4 4s-4-1.7909-4-4 1.7909-4 4-4 4 1.7909 4 4ZM6.5992 12l-.4-4m3.8 5.2727 6.7496-6.136m-5.7496 9.2269 5 .4546" /></svg>;
const ForwardRef = forwardRef(SocialIcon);
export default ForwardRef;
