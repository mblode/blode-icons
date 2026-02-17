import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GifFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M6 4C3.7909 4 2 5.7909 2 8v8c0 2.2091 1.7909 4 4 4h12c2.2091 0 4-1.7909 4-4V8c0-2.2091-1.7909-4-4-4zm-.0007 8.287c0 1.5399.9195 2.463 2.4794 2.463 1.4342 0 2.3536-.8068 2.3536-2.0596v-.1668c0-.5779-.2671-.8339-.884-.8339h-.8055c-.4165 0-.6326.1823-.6326.5353 0 .3568.22.5507.6326.5507h.1453v.0621c0 .3607-.2986.609-.7347.609-.5973 0-.9038-.3996-.9038-1.1675v-.5198c0-.7757.3065-1.1558.951-1.1558.3246 0 .5376.1521.7453.3006.089.0636.177.1265.2723.1764.1179.066.2515.1087.4086.1087.3851 0 .6562-.2638.6562-.6362 0-.3529-.2593-.6787-.664-.9153-.4087-.2405-.9588-.3879-1.5481-.3879-1.5167 0-2.4716.9503-2.4716 2.4203zm6.3576 2.3854c.5265 0 .8134-.3103.8134-.8727v-3.6266c0-.5585-.2947-.8727-.8252-.8727s-.8251.3103-.8251.8727v3.6266c0 .5586.3025.8727.8369.8727m3.3674-.8727c0 .5663-.2829.8727-.8016.8727-.5383 0-.8487-.318-.8487-.8727v-3.6343c0-.512.3143-.8262.8212-.8262h2.4951c.3497 0 .609.2715.609.64s-.2593.6283-.609.6283h-1.666v.9736h1.4695c.3655 0 .6091.2482.6091.6128 0 .3608-.2476.6129-.6091.6129h-1.4695z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GifFilledIcon);
export default createLucideIcon('GifFilledIcon', ForwardRef);
