import { createLucideIcon } from './create-lucide-icon'
import * as React from "react";
import type { SVGProps } from "react";
import { Ref, forwardRef } from "react";
const SushiFilledIcon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24" ref={ref} {...props}><path fill="currentColor" fillRule="evenodd" d="M12 5q-.2931 0-.5813.0124C10.6621 5.0449 10 5.7394 10 6.7237V18h4V6.7237c0-.9844-.6621-1.6788-1.4187-1.7113A14 14 0 0 0 12 5M7 20c-2.2091 0-4-1.7909-4-4v-.2762c-.278.0264-.5916.0006-.9025-.1457-.501-.2358-.7721-.6762-.9129-1.1033C1.048 14.0601 1 13.5653 1 13.0217c0-4.5942 3.4141-7.6892 7.7802-8.6728l.0034.0151c.5793-.7669 1.4558-1.3028 2.5494-1.3498a15.6 15.6 0 0 1 1.334 0c1.0936.047 1.9702.583 2.5494 1.3498l.0034-.015C19.5859 5.3324 23 8.4274 23 13.0216c0 .5436-.048 1.0384-.1846 1.4531-.1408.4271-.4119.8675-.9129 1.1033-.3109.1463-.6244.1721-.9025.1457V16c0 2.2091-1.7909 4-4 4zm12-5.1197V16c0 1.1046-.8954 2-2 2h-1v-4.8743c.4437.2147.8758.4551 1.2951.7038.3117.1849.6428.3918.9681.595.2531.1582.5027.3142.7368.4558M8 13.1257c-.4437.2147-.8758.4551-1.2951.7038-.3117.1849-.6428.3918-.968.595-.2532.1582-.5028.3142-.7369.4558V16c0 1.1046.8954 2 2 2h1z" clipRule="evenodd" style={{
    fill: "currentColor",
    fillOpacity: 1
  }} /></svg>;
const ForwardRef = forwardRef(SushiFilledIcon);
export default createLucideIcon('SushiFilledIcon', ForwardRef);
