import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CoinRandFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2c5.5228 0 10 4.4772 10 10s-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2m2.5 5.3496c-.4971 0-.9004.4033-.9004.9004v4.5264L10.249 7.751a.8998.8998 0 0 0-1.6367.3525l-.0127.1465v2.8496H8c-.497 0-.9004.4033-.9004.9004s.4033.9004.9004.9004h.5996V15.75c0 .4971.4033.9004.9004.9004s.9004-.4033.9004-.9004v-4.5273l3.3506 5.0263a.9002.9002 0 0 0 1.6494-.499v-2.8496H16l.0918-.0049c.4539-.046.8086-.4294.8086-.8955s-.3547-.8495-.8086-.8955L16 11.0996h-.5996V8.25c0-.497-.4033-.9004-.9004-.9004" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CoinRandFilledIcon);
export default ForwardRef;
