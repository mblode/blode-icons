import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const LayersThreeFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="m20.7569 13.88-8.0738 2.9359a2 2 0 0 1-1.367 0L3.2423 13.88c-1.139-.4142-1.539-1.6049-1.1998-2.5644l9.9571 3.6207 9.9571-3.6207c.3392.9595-.0607 2.1502-1.1998 2.5644" /><path fill="currentColor" d="m20.7569 17.88-8.0738 2.9359a2 2 0 0 1-1.367 0L3.2423 17.88c-1.139-.4142-1.539-1.6049-1.1998-2.5644l9.9571 3.6207 9.9571-3.6207c.3392.9595-.0607 2.1502-1.1998 2.5644M12.6831 3.1849a2 2 0 0 0-1.367 0L3.2423 6.1208c-1.7554.6383-1.7554 3.1209 0 3.7592l8.0738 2.9359a2 2 0 0 0 1.367 0l8.0738-2.936c1.7554-.6382 1.7554-3.1208 0-3.7591z" /></svg>;
const ForwardRef = forwardRef(LayersThreeFilledIcon);
export default createLucideIcon('LayersThreeFilledIcon', ForwardRef);
