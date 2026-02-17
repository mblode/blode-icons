import type { SVGProps } from "react";
import { forwardRef, type Ref } from "react";

const TestTubeFilledIcon = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    fill="none"
    height={24}
    ref={ref}
    viewBox="0 0 24 24"
    width={24}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.0039 6c0 .5523-.4477 1-1 1s-1-.4477-1-1 .4477-1 1-1 1 .4477 1 1M20.0039 2.5c0 .8284-.6716 1.5-1.5 1.5s-1.5-.6716-1.5-1.5.6716-1.5 1.5-1.5 1.5.6716 1.5 1.5"
      fill="currentColor"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
    <path
      clipRule="evenodd"
      d="M12.2915 3.2943c.3898-.3913 1.023-.3925 1.4142-.0028L14.711 4.293l5.0014 5.0014.9961 1c.3897.3913.3885 1.0244-.0028 1.4142s-1.0244.3885-1.4142-.0028l-.2891-.2902-2.2662 2.2655a1 1 0 0 1-.0516.0516L9.707 20.708c-1.7713 1.7708-4.6427 1.7705-6.4137-.0005-1.7715-1.7714-1.7712-4.6436.0005-6.4147l9.2944-9.2915-.2939-.2928c-.3913-.3898-.3925-1.023-.0028-1.4142m1.7123 3.1198L8.4161 12h7.1727l2.0008-2.0001z"
      fill="currentColor"
      fillRule="evenodd"
      style={{
        fill: "currentColor",
        fillOpacity: 1,
      }}
    />
  </svg>
);
const ForwardRef = forwardRef(TestTubeFilledIcon);
export default ForwardRef;
