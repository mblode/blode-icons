import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const BookmarkRemoveFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 2C5.7909 2 4 3.7909 4 6v7.2405l-2.3303.8156c-.5213.1825-.796.753-.6135 1.2742s.7529.796 1.2742.6136l20-7c.5213-.1825.7959-.753.6135-1.2742s-.7529-.796-1.2742-.6136L20 7.6405V6c0-2.2091-1.7909-4-4-4zM4 19.9948v-2.5164l16-5.6v8.1164c0 1.6198-1.8249 2.5677-3.1501 1.6363l-3.6998-2.6005a2 2 0 0 0-2.3002 0l-3.6998 2.6005C5.8248 22.5625 4 21.6146 4 19.9948" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(BookmarkRemoveFilledIcon);
export default createLucideIcon('BookmarkRemoveFilledIcon', ForwardRef);
