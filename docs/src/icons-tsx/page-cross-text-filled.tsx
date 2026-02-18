import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const PageCrossTextFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M8 2C5.7909 2 4 3.7909 4 6v12c0 2.2091 1.7909 4 4 4h6.0096c-.3134-1.0266-.0642-2.1881.7478-3.0001-1.1716-1.1715-1.1716-3.071 0-4.2426s3.071-1.1716 4.2426 0a2.99 2.99 0 0 1 1-.6621V6c0-2.2091-1.7909-4-4-4zm0 3c-.5523 0-1 .4477-1 1s.4477 1 1 1h6c.5523 0 1-.4477 1-1s-.4477-1-1-1zm0 4c-.5523 0-1 .4477-1 1s.4477 1 1 1h2c.5523 0 1-.4477 1-1s-.4477-1-1-1z" clipRule="evenodd" /><path fill="currentColor" fillRule="evenodd" d="M21.8284 16.1716c.3906.3905.3906 1.0237 0 1.4142L20.4142 19l1.4142 1.4142c.3906.3905.3906 1.0237 0 1.4142-.3905.3906-1.0237.3906-1.4142 0L19 20.4142l-1.4142 1.4142c-.3905.3906-1.0237.3906-1.4142 0-.3906-.3905-.3906-1.0237 0-1.4142L17.5858 19l-1.4142-1.4142c-.3906-.3905-.3906-1.0237 0-1.4142.3905-.3906 1.0237-.3906 1.4142 0L19 17.5858l1.4142-1.4142c.3905-.3906 1.0237-.3906 1.4142 0" clipRule="evenodd" /></svg>;
const ForwardRef = forwardRef(PageCrossTextFilledIcon);
export default createLucideIcon('PageCrossTextFilledIcon', ForwardRef);
