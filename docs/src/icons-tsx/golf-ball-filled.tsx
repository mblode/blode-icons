import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const GolfBallFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2C7.8579 2 4.5 5.3579 4.5 9.5S7.8579 17 12 17s7.5-3.3579 7.5-7.5S16.1421 2 12 2m2.75 6.6747c.5523 0 1-.4477 1-1a1 1 0 0 0-.0254-.2247c.4442.1019.7754.4996.7754.9746 0 .5523-.4477 1-1 1-.475 0-.8726-.3312-.9746-.7752.0722.0166.1474.0253.2246.0253m-1.0254.9748c0 .5522-.4477.9999-1 .9999a1 1 0 0 1-.2246-.0253c.102.444.4996.7752.9746.7752.5523 0 1-.4477 1-1 0-.475-.3312-.8727-.7753-.9746a1 1 0 0 1 .0253.2248m-2 1.9999c0 .5523-.4477 1-1 1a1 1 0 0 1-.2246-.0253c.102.444.4996.7752.9746.7752.5523 0 1-.4477 1-1 0-.475-.3312-.8727-.7753-.9747.0166.0723.0253.1475.0253.2248m1.5254 1.5c.5523 0 1-.4478 1-1 0-.0773-.0088-.1526-.0254-.2248.4442.1019.7754.4996.7754.9746 0 .5523-.4477 1-1 1-.475 0-.8726-.3311-.9746-.7752.0722.0166.1474.0254.2246.0254m1.9746-2c.5523 0 1-.4477 1-1a1 1 0 0 0-.0253-.2247c.4441.1019.7753.4996.7753.9746 0 .5523-.4477 1-1 1-.475 0-.8726-.3312-.9746-.7752.0722.0166.1474.0253.2246.0253" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M13 21c0-1.1046.8954-2 2-2 .5523 0 1-.4477 1-1s-.4477-1-1-1c-1.1947 0-2.2671.5238-3 1.3542C11.2671 17.5238 10.1947 17 9 17c-.5523 0-1 .4477-1 1s.4477 1 1 1c1.1046 0 2 .8954 2 2 0 .5523.4477 1 1 1s1-.4477 1-1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(GolfBallFilledIcon);
export default createLucideIcon('GolfBallFilledIcon', ForwardRef);
