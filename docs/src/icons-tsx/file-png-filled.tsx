import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FilePngFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13 3H8C5.7909 3 4 4.7909 4 7v5h16v-2h-4c-1.6569 0-3-1.3431-3-3z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M19.8834 8a3 3 0 0 0-.7621-1.2929l-2.8284-2.8284A3 3 0 0 0 15 3.1167V7c0 .5523.4477 1 1 1z" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M3 15c0-.5523.4477-1 1-1h1.75c1.3807 0 2.5 1.1193 2.5 2.5S7.1307 19 5.75 19H5v1c0 .5523-.4477 1-1 1s-1-.4477-1-1zm2 2h.75a.5.5 0 0 0 0-1H5zM9 15c0-.5523.4477-1 1-1h.25a1 1 0 0 1 .8575.4855L12.5 16.8063V15c0-.5523.4477-1 1-1s1 .4477 1 1v5c0 .5523-.4477 1-1 1h-.25a1 1 0 0 1-.8575-.4855L11 18.1937V20c0 .5523-.4477 1-1 1s-1-.4477-1-1zM18.706 15.9895c-.1475-.0363-.3006-.0446-.3973-.0387-.392.0238-1.0587.5168-1.0587 1.5825 0 1.0547.5947 1.5135 1.1347 1.5167.2887-.0044.547-.0687.7403-.1615v-.8349c0-.5523.4477-1 1-1s1 .4477 1 1v1.328c0 .251-.0944.4929-.2645.6776-.6769.7346-1.6861.9814-2.4581.9907l-.0121.0002c-1.943 0-3.1403-1.6764-3.1403-3.5168 0-1.833 1.2228-3.4747 2.9374-3.5789.2842-.0172.6402.0053.9966.093.3474.0855.7849.2551 1.1388.5991.3961.3849.4051 1.018.0202 1.4141s-1.018.4051-1.414.0202c0 0-.016-.0142-.0549-.0332a.86.86 0 0 0-.1681-.0581" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(FilePngFilledIcon);
export default createLucideIcon('FilePngFilledIcon', ForwardRef);
