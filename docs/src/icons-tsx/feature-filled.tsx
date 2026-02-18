import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const FeatureFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M13 2c0-.5523-.4477-1-1-1s-1 .4477-1 1v6c0 .5523.4477 1 1 1s1-.4477 1-1zM6.7071 5.2929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l1.5 1.5c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142zM18.7071 6.7071c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-1.5 1.5c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0zM2 11c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1zM16 11c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1zM13 16c0-.5523-.4477-1-1-1s-1 .4477-1 1v6c0 .5523.4477 1 1 1s1-.4477 1-1zM8.2071 17.2071c.3905-.3905.3905-1.0237 0-1.4142s-1.0237-.3905-1.4142 0l-1.5 1.5c-.3905.3905-.3905 1.0237 0 1.4142s1.0237.3905 1.4142 0zM17.2071 15.7929c-.3905-.3905-1.0237-.3905-1.4142 0s-.3905 1.0237 0 1.4142l1.5 1.5c.3905.3905 1.0237.3905 1.4142 0s.3905-1.0237 0-1.4142z" /></svg>;
const ForwardRef = forwardRef(FeatureFilledIcon);
export default createLucideIcon('FeatureFilledIcon', ForwardRef);
