import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const HomeDoorFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.5224 2.2608c-1.4696-1.194-3.5752-1.194-5.0448 0l-5 4.0625A4 4 0 0 0 3 9.4277v7.5721c0 2.2092 1.7909 4 4 4h1V16c0-2.2091 1.7909-4 4-4s4 1.7909 4 4v4.9998h1c2.2091 0 4-1.7908 4-4v-7.572a4 4 0 0 0-1.4776-3.1045z" /><path fill="currentColor" d="M14 20.9998V16c0-1.1046-.8954-2-2-2s-2 .8954-2 2v4.9998z" /></svg>;
const ForwardRef = forwardRef(HomeDoorFilledIcon);
export default createLucideIcon('HomeDoorFilledIcon', ForwardRef);
