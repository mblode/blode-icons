import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RainyFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.5 2C5.9102 2 3 4.9101 3 8.5S5.9101 15 9.5 15H16c2.7614 0 5-2.2386 5-5s-2.2386-5-5-5c-.2282 0-.4533.0153-.6743.0452-.1907.0257-.3593-.0654-.426-.1648C13.7346 3.1454 11.7512 2 9.5 2M7.3944 18.4472c.247-.494.0468-1.0946-.4472-1.3416s-1.0946-.0468-1.3416.4472l-1 2c-.247.494-.0468 1.0946.4472 1.3416s1.0946.0468 1.3416-.4472zM12.3944 18.4472c.247-.494.0468-1.0946-.4472-1.3416s-1.0946-.0468-1.3416.4472l-1 2c-.247.494-.0468 1.0946.4472 1.3416s1.0946.0468 1.3416-.4472zM17.3944 18.4472c.247-.494.0468-1.0946-.4472-1.3416s-1.0946-.0468-1.3416.4472l-1 2c-.247.494-.0468 1.0946.4472 1.3416s1.0946.0468 1.3416-.4472z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(RainyFilledIcon);
export default createLucideIcon('RainyFilledIcon', ForwardRef);
