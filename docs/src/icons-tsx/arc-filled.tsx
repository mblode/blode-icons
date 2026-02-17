import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ArcFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M11.4501 2.1501c.8332 0 1.595.4708 1.9676 1.2161l3.6349 7.2697c.797-.9473 1.3552-2.102 1.5813-3.3716.2129-1.1962 1.3553-1.9932 2.5514-1.7802s1.9932 1.3553 1.7803 2.5515c-.4767 2.6772-1.8685 5.0374-3.8407 6.7451l1.4426 2.885c.5433 1.0867.1028 2.4081-.9839 2.9515s-2.4081.1029-2.9515-.9839l-1.3253-2.6506c-1.1873.4089-2.4617.6309-3.7882.6309-1.3701 0-2.6845-.2371-3.9047-.6721l-1.346 2.6918c-.5433 1.0868-1.8647 1.5272-2.9514.9839-1.0867-.5434-1.5272-1.8648-.9839-2.9515l1.4844-2.9688a11.67 11.67 0 0 1-2.5565-3.2326c-.573-1.0714-.1691-2.4044.9022-2.9775 1.0713-.573 2.4044-.1692 2.9775.9022a7.25 7.25 0 0 0 .759 1.1434l3.5832-7.1662a2.2 2.2 0 0 1 1.9677-1.216M9.6057 12.958a7.24 7.24 0 0 0 1.9129.2557 7.24 7.24 0 0 0 1.7918-.2239l-1.8603-3.7206z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ArcFilledIcon);
export default createLucideIcon('ArcFilledIcon', ForwardRef);
