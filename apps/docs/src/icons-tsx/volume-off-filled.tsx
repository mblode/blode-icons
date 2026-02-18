import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const VolumeOffFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M9.7196 3.5985C11.0223 2.5129 13 3.4393 13 5.1349v13.7299c0 1.6957-1.9777 2.622-3.2804 1.5365l-3.8035-3.1696a1 1 0 0 0-.6402-.2318H4c-1.6568 0-3-1.3432-3-3v-4c0-1.6569 1.3432-3 3-3h1.2759a1 1 0 0 0 .6402-.2318zM22.2071 10.707c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-1.4142 1.4142-1.4143-1.4142c-.3905-.3905-1.0236-.3905-1.4142 0s-.3905 1.0237 0 1.4142l1.4142 1.4142-1.4142 1.4142c-.3905.3905-.3905 1.0237 0 1.4142.3906.3906 1.0237.3906 1.4142 0l1.4143-1.4142 1.4142 1.4142c.3905.3906 1.0237.3906 1.4142 0s.3905-1.0237 0-1.4142l-1.4142-1.4142z" /></svg>;
const ForwardRef = forwardRef(VolumeOffFilledIcon);
export default createLucideIcon('VolumeOffFilledIcon', ForwardRef);
