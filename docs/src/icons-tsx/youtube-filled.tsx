import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const YoutubeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M20.2043 4.0078c.9041.2798 1.6146 1.1015 1.8566 2.147C22.4982 8.0478 22.5 12 22.5 12s0 3.9522-.4391 5.8453c-.242 1.0455-.9525 1.8671-1.8566 2.1469C18.5673 20.5 12 20.5 12 20.5s-6.5673 0-8.2043-.5078c-.9041-.2798-1.6146-1.1014-1.8566-2.1469C1.5 15.9522 1.5 12 1.5 12s0-3.9521.439-5.8452c.2421-1.0455.9526-1.8672 1.8567-2.147C5.4327 3.5 12 3.5 12 3.5s6.5673 0 8.2043.5078m-4.6909 7.9925-5.7155 3.2996V8.7007z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(YoutubeFilledIcon);
export default ForwardRef;
