import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BluetoothFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M9.8193 4.134c0-1.7918 2.0725-2.7879 3.4715-1.6686l4.277 3.4216c1.0693.8554 1.0693 2.4816 0 3.337L14.0979 12l3.4699 2.7759c1.0693.8554 1.0693 2.4816 0 3.337l-4.277 3.4216c-1.399 1.1193-3.4715.1232-3.4715-1.6685v-4.4431l-3.7504 3.0002c-.4791.3834-1.1784.3057-1.5617-.1735s-.3057-1.1784.1735-1.5617l5.1386-4.1109v-1.1541L4.6807 7.312c-.4792-.3833-.5568-1.0825-.1735-1.5617s1.0826-.5569 1.5617-.1735L9.8193 8.577zm2.5 6.443-.2778-.2222v-6.043l4.0547 3.2437zm0 2.8459-.2778.2222v6.043l4.0547-3.2437z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(BluetoothFilledIcon);
export default createLucideIcon('BluetoothFilledIcon', ForwardRef);
