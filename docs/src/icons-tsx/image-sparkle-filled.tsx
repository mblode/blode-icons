import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ImageSparkleFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} fill="none" viewBox="0 0 25 24" ref={ref} {...props}><path fill="currentColor" d="m14.3245 8.351.4783-.9566c.1842-.3685.7102-.3685.8944 0l.4783.9565a.5.5 0 0 0 .2236.2236l.9565.4783c.3685.1843.3685.7102 0 .8944l-.9565.4783a.5.5 0 0 0-.2236.2236l-.4783.9565c-.1842.3685-.7102.3685-.8944 0l-.4783-.9565a.5.5 0 0 0-.2236-.2236l-.9565-.4783c-.3685-.1843-.3685-.7102 0-.8944l.9565-.4783a.5.5 0 0 0 .2236-.2236" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" fillRule="evenodd" d="M3.75 7c0-2.2091 1.7909-4 4-4h10c2.2091 0 4 1.7909 4 4v10c0 2.2091-1.7909 4-4 4h-10c-2.2091 0-4-1.7909-4-4zm4-2c-1.1046 0-2 .8954-2 2v6.5858l.1716-.1716c1.562-1.5621 4.0947-1.5621 5.6568 0L17.1642 19h.5858c1.1046 0 2-.8954 2-2V7c0-1.1046-.8954-2-2-2z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(ImageSparkleFilledIcon);
export default createLucideIcon('ImageSparkleFilledIcon', ForwardRef);
