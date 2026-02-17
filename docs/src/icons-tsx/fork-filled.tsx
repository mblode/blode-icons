import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ForkFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M7.3257 3.0067c0-.5201-.3788-.9534-.8711-.9966l-.0756-.0066c-.5229-.0458-.982.3631-1.0256.9135L4.513 13.5304c-.0928 1.1726.3095 2.3286 1.0999 3.1606l1.5038 1.583c.6936.7301 1.0832 1.7203 1.0832 2.7528 0 .5375.414.9733.9246.9733h5.7508c.5106 0 .9246-.4358.9246-.9733 0-1.0325.3896-2.0227 1.0832-2.7528l1.5038-1.583c.7904-.832 1.1927-1.988 1.0999-3.1606L18.6466 2.917c-.0435-.5504-.5027-.9593-1.0256-.9135l-.0756.0066c-.4923.0432-.8711.4765-.8711.9966v9.0332c0 .5303-.4084.9602-.9121.9602s-.9122-.4299-.9122-.9602V3.0001c0-.5523-.4254-1-.95-1-.5247 0-.95.4477-.95 1v9c0 .5522-.4253 1-.95 1s-.95-.4478-.95-1v-9c0-.5523-.4253-1-.95-1s-.95.4477-.95 1v9.0398c0 .5303-.4084.9602-.9122.9602s-.9121-.4299-.9121-.9602z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ForkFilledIcon);
export default createLucideIcon('ForkFilledIcon', ForwardRef);
