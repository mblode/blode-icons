import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const EthereumFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m11.8181 13.7276-1.9975-.4994L12 16.2249l2.1794-2.9967-1.9975.4994a.75.75 0 0 1-.3638 0M12 12.2269l2.7396-.6849L12 7.7751 9.2604 11.542z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M2 12C2 6.4772 6.4772 2 12 2s10 4.4772 10 10-4.4772 10-10 10S2 17.5228 2 12m10.6066-5.9411a.75.75 0 0 0-1.2132 0l-4 5.5a.75.75 0 0 0 0 .8822l4 5.5a.75.75 0 0 0 1.2132 0l4-5.5a.75.75 0 0 0 0-.8822z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(EthereumFilledIcon);
export default createLucideIcon('EthereumFilledIcon', ForwardRef);
