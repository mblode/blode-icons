import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GiftBoxFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M2 7.3333C2 5.4923 3.4924 4 5.3333 4H11v5H3.6667C2.7462 9 2 8.2538 2 7.3333M3 11h8v9H7c-2.2091 0-4-1.7909-4-4zM13 4h5.6667C20.5076 4 22 5.4924 22 7.3333 22 8.2538 21.2538 9 20.3333 9H13zM13 11h8v5c0 2.2091-1.7909 4-4 4h-4z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GiftBoxFilledIcon);
export default ForwardRef;
