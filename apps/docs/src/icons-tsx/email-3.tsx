import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Email3Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m13.3416 12.3292-.4472-.8944zm-2.6832 0-.4473.8944zM20 8v8h2V8zm-2 10H6v2h12zM4 16V8H2v8zM6 6h12V4H6zm14.5528 1.6056-7.6584 3.8292.8945 1.7888 7.6583-3.8292zm-9.4472 3.8292L3.4472 7.6056l-.8944 1.7888 7.6583 3.8292zM4 8c0-1.1046.8955-2 2-2V4C3.791 4 2 5.7909 2 8zm2 10c-1.1045 0-2-.8954-2-2H2c0 2.2091 1.7909 4 4 4zm14-2c0 1.1046-.8954 2-2 2v2c2.2092 0 4-1.7909 4-4zm-7.1056-4.5652a2 2 0 0 1-1.7888 0l-.8945 1.7888a4 4 0 0 0 3.5778 0zM22 8c0-2.2091-1.7908-4-4-4v2c1.1046 0 2 .8954 2 2z" /></svg>;
const ForwardRef = forwardRef(Email3Icon);
export default createLucideIcon('Email3Icon', ForwardRef);
