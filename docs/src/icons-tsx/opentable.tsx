import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const OpentableIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M1 11.9997c0-1.1043.8936-1.9998 1.9954-1.9998 1.1022 0 1.996.8955 1.996 1.9998 0 1.1049-.8938 2.0003-1.996 2.0003C1.8936 14 1 13.105 1 11.9997M15.0174 14c-1.1022 0-1.9954-.8954-1.9954-2.0003 0-1.1043.8932-1.9998 1.9954-1.9998 1.1018 0 1.9959.8955 1.9959 1.9998 0 1.1049-.8941 2.0003-1.9959 2.0003m0-10c-4.408 0-7.9821 3.5818-7.9821 7.9997 0 4.4189 3.5736 8.0003 7.9821 8.0003C19.4264 20 23 16.4186 23 11.9997 23 7.5823 19.4264 4 15.0174 4" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(OpentableIcon);
export default ForwardRef;
