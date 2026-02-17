import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const Gift2FilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M11 3H7C4.7909 3 3 4.7909 3 7v4h4.3998A3.65 3.65 0 0 1 7 9.3333C7 8.0447 8.0447 7 9.3333 7A3.65 3.65 0 0 1 11 7.3998zM3 13v4c0 2.2091 1.7909 4 4 4h4v-6.1604c-.7274.7437-1.5373 1.4066-2.4577 2.0006-.464.2995-1.083.1661-1.3825-.2979-.2995-.4641-.1661-1.083.298-1.3825.9657-.6233 1.7902-1.3329 2.5231-2.1598zM13 21h4c2.2091 0 4-1.7909 4-4v-4h-6.9809c.7329.8269 1.5574 1.5365 2.5232 2.1598.464.2995.5974.9184.2979 1.3825-.2995.464-.9184.5974-1.3825.2979-.9204-.594-1.7303-1.2569-2.4577-2.0006zM21 11V7c0-2.2091-1.7909-4-4-4h-4v4.3998A3.65 3.65 0 0 1 14.6667 7C15.9553 7 17 8.0447 17 9.3333A3.65 3.65 0 0 1 16.6002 11z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M9.3333 9C10.2538 9 11 9.7462 11 10.6667V11h-.3333C9.7462 11 9 10.2538 9 9.3333 9 9.1493 9.1492 9 9.3333 9M13 10.6667V11h.3333C14.2538 11 15 10.2538 15 9.3333A.3333.3333 0 0 0 14.6667 9C13.7462 9 13 9.7462 13 10.6667" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(Gift2FilledIcon);
export default createLucideIcon('Gift2FilledIcon', ForwardRef);
