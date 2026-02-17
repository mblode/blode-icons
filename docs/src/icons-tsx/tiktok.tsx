import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const TiktokIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.062 9.997A8.002 8.002 0 0 1 15.385 8.5v6.809a6.193 6.193 0 0 1-4.0228 5.7986A6.193 6.193 0 1 1 10.043 9.173v3.424a2.842 2.842 0 0 0-3.1632 1.0574 2.842 2.842 0 1 0 5.1532 1.6546V2h3.352c-.002.283.021.566.07.845A4.654 4.654 0 0 0 17.51 5.9c.758.5 1.645.767 2.553.767v3.329z" /></svg>;
const ForwardRef = forwardRef(TiktokIcon);
export default ForwardRef;
