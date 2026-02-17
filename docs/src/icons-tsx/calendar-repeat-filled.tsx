import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const CalendarRepeatFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" d="M8 2c.5523 0 1 .4477 1 1v1h6V3c0-.5523.4477-1 1-1s1 .4477 1 1v1c2.2091 0 4 1.7909 4 4v1c0 .5523-.4477 1-1 1H5v7c0 1.1046.8954 2 2 2h3c.5523 0 1 .4477 1 1s-.4477 1-1 1H7c-2.2091 0-4-1.7909-4-4V8c0-2.2091 1.7909-4 4-4V3c0-.5523.4477-1 1-1" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /><path fill="currentColor" d="M17 14.375c-.3327 0-.654.0616-.951.174l.5974.5974c.315.315.0919.8536-.3535.8536H14c-.5523 0-1-.4477-1-1v-2.2929c0-.4454.5386-.6685.8536-.3535l.7064.7064a4.69 4.69 0 0 1 2.44-.685c2.1132 0 3.893 1.4164 4.4467 3.3497.152.5309-.1551 1.0846-.6861 1.2367s-1.0846-.1551-1.2366-.6861c-.3145-1.0981-1.3269-1.9003-2.524-1.9003M14.476 17.7247c-.152-.531-.7057-.8381-1.2366-.6861-.531.1521-.8381.7058-.6861 1.2367.5537 1.9333 2.3335 3.3497 4.4467 3.3497a4.69 4.69 0 0 0 2.44-.685l.7064.7064c.315.315.8536.0919.8536-.3535V19c0-.5523-.4477-1-1-1h-2.2929c-.4454 0-.6685.5386-.3535.8536l.5974.5974a2.69 2.69 0 0 1-.951.174c-1.1971 0-2.2095-.8022-2.524-1.9003" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(CalendarRepeatFilledIcon);
export default createLucideIcon('CalendarRepeatFilledIcon', ForwardRef);
