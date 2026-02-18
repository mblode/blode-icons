import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ColorPickerFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="m10.7071 6.2929.7929.793 2.7929-2.793c1.3082-1.3082 3.3276-1.4717 4.8136-.4905a3.85 3.85 0 0 1 .6006.4906c1.3082 1.3082 1.4717 3.3276.4906 4.8136a3.85 3.85 0 0 1-.4906.6006L16.9142 12.5l.7929.7929c.3905.3905.3905 1.0237 0 1.4142s-1.0237.3905-1.4142 0l-.7929-.7929L9 20.4143a2 2 0 0 1-1.4142.5858H5c-1.1046 0-2-.8955-2-2v-2.5858c0-.5305.2107-1.0392.5858-1.4142l6.5-6.5-.793-.793c-.3904-.3905-.3904-1.0237 0-1.4142.3906-.3905 1.0238-.3905 1.4143 0M11.5 9.9143 14.0858 12.5 11.5858 15H6.4143z" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(ColorPickerFilledIcon);
export default createLucideIcon('ColorPickerFilledIcon', ForwardRef);
