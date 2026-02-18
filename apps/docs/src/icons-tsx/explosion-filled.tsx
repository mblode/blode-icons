import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const ExplosionFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M12.889 2.542a1.0001 1.0001 0 0 0-1.778 0l-.6962 1.3514c-.5049.98-1.7077 1.3666-2.689.8644L4.403 3.0572A1 1 0 0 0 3.0572 4.403l1.7006 3.3227c.5022.9814.1156 2.1842-.8644 2.6891l-1.3514.6962a1.0001 1.0001 0 0 0 0 1.778l1.754.9036c.8685.4475 1.2866 1.4569.9889 2.3874l-.6013 1.8792a1.0001 1.0001 0 0 0 1.2572 1.2572l1.8792-.6013c.9305-.2977 1.94.1204 2.3874.9889l.9036 1.754a1.0002 1.0002 0 0 0 1.778 0l.6962-1.3514c.5049-.98 1.7077-1.3666 2.6891-.8644l3.3227 1.7006a1 1 0 0 0 1.3458-1.3458l-1.7006-3.3227c-.5022-.9814-.1156-2.1842.8644-2.6891l1.3514-.6962a1.0002 1.0002 0 0 0 0-1.778l-1.754-.9036c-.8685-.4474-1.2866-1.4569-.9889-2.3874l.6013-1.8792a1.0001 1.0001 0 0 0-1.2572-1.2572l-1.8792.6013c-.9305.2977-1.9399-.1204-2.3874-.989z" /></svg>;
const ForwardRef = forwardRef(ExplosionFilledIcon);
export default createLucideIcon('ExplosionFilledIcon', ForwardRef);
