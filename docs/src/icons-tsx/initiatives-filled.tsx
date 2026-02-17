import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const InitiativesFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M4 12c0-4.4183 3.5817-8 8-8s8 3.5817 8 8c0 .9254-.1567 1.812-.4442 2.6361-.1819.5215.0934 1.0917.6148 1.2736s1.0917-.0934 1.2736-.6148C21.8046 14.2619 22 13.1527 22 12c0-5.5228-4.4772-10-10-10S2 6.4772 2 12c0 1.1527.1954 2.2619.5558 3.2949.182.5214.7521.7967 1.2736.6148s.7967-.7521.6148-1.2736C4.1567 13.812 4 12.9254 4 12" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M13.745 10.5694c-.7637-1.3637-2.7263-1.3637-3.49 0L6.086 18.014c-1.0178 1.8176 1.0742 3.7861 2.8265 2.6596L12 18.6888l3.0875 1.9848c1.7522 1.1265 3.8443-.842 2.8265-2.6596z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(InitiativesFilledIcon);
export default ForwardRef;
