import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const MedicinePill2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M20.1241 11.944c.3097-.2089.5903-.4349.8348-.6783C21.5641 10.6633 22 9.8968 22 9s-.4359-1.6633-1.0411-2.2657c-.6013-.5986-1.4208-1.0917-2.3533-1.4844C16.7364 4.463 14.2235 4 11.5 4c-2.1038 0-4.0818.2762-5.7346.7646zM3.321 5.7785c-.489.2821-.9229.6004-1.28.9558C1.436 7.3367 1 8.1032 1 9s.436 1.6633 1.041 2.2657c.6014.5986 1.4209 1.0917 2.3534 1.4844C6.2636 13.5371 8.7764 14 11.5 14c2.3694 0 4.5793-.3503 6.3446-.9596z" /><path fill="currentColor" d="M1 13.0255c.7744.6675 1.6921 1.1779 2.6183 1.5678C5.7876 15.5067 8.5761 16 11.5 16s5.7124-.4933 7.8817-1.4067c.9262-.3899 1.844-.9003 2.6183-1.5678v1.9746c0 .8968-.4359 1.6632-1.0411 2.2656-.6013.5987-1.4208 1.0918-2.3533 1.4844C16.7364 19.5371 14.2235 20 11.5 20s-5.2364-.4629-7.1056-1.2499c-.9325-.3926-1.752-.8857-2.3534-1.4844C1.436 16.6633 1 15.8969 1 15.0001z" /></svg>;
const ForwardRef = forwardRef(MedicinePill2FilledIcon);
export default createLucideIcon('MedicinePill2FilledIcon', ForwardRef);
