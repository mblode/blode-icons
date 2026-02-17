import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CoinRupeesFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 2c5.5228 0 10 4.4772 10 10s-4.4772 10-10 10S2 17.5228 2 12 6.4772 2 12 2M9.5 7.0996c-.497 0-.9004.4033-.9004.9004s.4033.9004.9004.9004H11c.8371 0 1.5573.4907 1.8945 1.1992H8c-.497 0-.9004.4033-.9004.9004s.4033.9004.9004.9004h4.8945c-.3372.7085-1.0574 1.1992-1.8945 1.1992H9.5a.9004.9004 0 0 0-.54 1.6201l4 3 .0761.0518a.9.9 0 0 0 1.1836-.2315.9.9 0 0 0-.1093-1.2011l-.0704-.0586-2.0214-1.5157c1.374-.3708 2.4453-1.4737 2.7744-2.8642H16l.0918-.0049c.4539-.046.8086-.4294.8086-.8955s-.3547-.8495-.8086-.8955L16 10.0996h-1.2051c-.4066-1.7198-1.951-3-3.7949-3z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(CoinRupeesFilledIcon);
export default createLucideIcon('CoinRupeesFilledIcon', ForwardRef);
