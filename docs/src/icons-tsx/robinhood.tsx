import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const RobinhoodIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M14.1413 6.5106h-4.0656c-.1471 0-.2715.0588-.3745.1872l-2.9154 3.6109c-.428.535-.535 1.0298-.535 1.7386v3.6912c-.9495 2.6613-1.5513 4.4668-1.9927 6.0984-.0267.1043.0134.1605.107.1605h.4414c.0802 0 .1604-.0401.1872-.107 3.33-8.479 6.9543-12.6783 9.2279-15.1926.0936-.107.0535-.1872-.0803-.1872" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M14.2617 2.3514c-.2728.1056-.535.2848-.6553.3878-1.2037 1.0298-2.0061 1.8456-2.7684 2.648-.0936.0936-.0535.1872.0802.1872h4.507c.4146 0 .6553.2408.6553.6554v5.082c0 .1337.107.1738.1872.0535l2.7149-3.544c.4413-.5751.5751-.749.6954-1.5514.1605-1.177.0669-2.9824-.6419-3.7313-.6286-.6687-3.4638-.6954-4.7744-.1872" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M14.9437 7.527c-2.7951 3.1161-4.975 6.3926-6.9944 10.3379-.0508.099.0134.1872.1337.1471l4.1726-1.2839c.4708-.1444.7356-.3343.9629-.7088l1.859-3.0626c.0401-.0802.0535-.1738.0535-.2407V7.6073c0-.1338-.0936-.1873-.1873-.0803" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(RobinhoodIcon);
export default createLucideIcon('RobinhoodIcon', ForwardRef);
