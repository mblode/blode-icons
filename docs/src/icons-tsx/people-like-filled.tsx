import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PeopleLikeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12 2C9.5147 2 7.5 4.0147 7.5 6.5S9.5147 11 12 11s4.5-2.0147 4.5-4.5S14.4853 2 12 2M4.5527 16.3886C5.9627 13.7661 8.6424 12 12 12c1.382 0 2.6492.2992 3.7602.8341C13.2775 13.3104 12 15.7197 12 17.75c0 1.2416.4715 2.3532 1.0986 3.25H7.7954c-1.1716 0-2.264-.521-2.9372-1.3586-.6976-.8677-.9347-2.0825-.3055-3.2528" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M16.6667 14.75c-.685 0-1.3684.2752-1.8754.8161C14.2795 16.112 14 16.8693 14 17.75c0 1.4281.9978 2.519 1.7694 3.1564a7.9 7.9 0 0 0 1.1707.7998c.1693.094.3282.1729.4653.2317.0675.0289.1411.0578.2148.0814l.003.001c.0444.0142.1964.063.3768.063s.3324-.0488.3768-.063l.003-.001a2.5 2.5 0 0 0 .2148-.0814c.1371-.0588.296-.1377.4653-.2317a7.9 7.9 0 0 0 1.1707-.7998C21.0022 20.269 22 19.1781 22 17.75c0-.8807-.2795-1.638-.7913-2.1839-.507-.5409-1.1904-.8161-1.8754-.8161A3.035 3.035 0 0 0 18 15.0578a3.035 3.035 0 0 0-1.3333-.3078" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(PeopleLikeFilledIcon);
export default createLucideIcon('PeopleLikeFilledIcon', ForwardRef);
