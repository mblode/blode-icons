import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const UfoFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M7.0307 6.443c-.8892.1698-1.7077.3847-2.4321.6383-.966.338-1.8192.7637-2.4503 1.286C1.5236 8.8841 1 9.5997 1 10.5c0 1.3211 1.098 2.2401 2.2027 2.8213.8538.4491 1.928.817 3.1426 1.0927l-3.1908 5.052c-.295.467-.1554 1.0846.3115 1.3795.467.2949 1.0846.1554 1.3795-.3115l5.3187-8.4213c.306-.4845.7444-.7629 1.1763-.7969a8.4 8.4 0 0 1 1.319 0c.4319.034.8703.3124 1.1763.7969l5.3187 8.4213c.2949.4669.9125.6064 1.3795.3115s.6064-.9125.3115-1.3795l-3.1908-5.052c1.2146-.2757 2.2888-.6436 3.1426-1.0927C21.9019 12.7401 23 11.8211 23 10.5c0-.9002-.5236-1.6158-1.1483-2.1328-.6311-.5222-1.4842-.9478-2.4503-1.286-.7244-.2535-1.5429-.4684-2.4321-.6381C16.6923 3.9438 14.5732 2 12 2S7.3077 3.9438 7.0307 6.443m2.094-.3014C10.0427 6.0489 11.0075 6 12 6s1.9572.049 2.8754.1416C14.5062 4.903 13.3585 4 12 4s-2.5062.903-2.8754 2.1416" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(UfoFilledIcon);
export default createLucideIcon('UfoFilledIcon', ForwardRef);
