import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CursorIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.8887 6.7495 12 22.4999V11.9998z" opacity={0.1} /><g fill="currentColor" opacity={0.5}><path d="m11.9976 22.5-8.8882-5.25L11.9976 12zM20.8869 17.25l-8.8893 5.25 4.4456-7.875zM11.9976 6.75H3.1094l8.8882-5.25z" /></g><path fill="currentColor" d="m11.9976 12-8.8882 5.25V6.75zM20.885 6.749l.0019.001-.001 10.5-4.4436-2.625zl-8.8864.001V1.5z" /></svg>;
const ForwardRef = forwardRef(CursorIcon);
export default ForwardRef;
