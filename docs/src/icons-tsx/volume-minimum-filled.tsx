import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VolumeMinimumFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.7196 3.5985C11.0223 2.5129 13 3.4393 13 5.1349v13.7299c0 1.6957-1.9777 2.622-3.2804 1.5365l-3.8035-3.1696a1 1 0 0 0-.6402-.2318H4c-1.6568 0-3-1.3432-3-3v-4c0-1.6569 1.3432-3 3-3h1.2759a1 1 0 0 0 .6402-.2318zM16.3305 9.4992c-.2766-.478-.8883-.6414-1.3664-.3649-.478.2766-.6414.8883-.3648 1.3664.2547.4402.4008.9512.4008 1.4993s-.1461 1.059-.4008 1.4993c-.2766.4781-.1132 1.0898.3648 1.3663.4781.2766 1.0898.1132 1.3664-.3648A4.98 4.98 0 0 0 17 12a4.98 4.98 0 0 0-.6695-2.5008" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(VolumeMinimumFilledIcon);
export default ForwardRef;
