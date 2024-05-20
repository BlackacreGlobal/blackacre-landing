import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export default function Card({
  itemId,
  children,
}: {
  itemId: string;
  children?: React.ReactNode;
}) {
  const visibility = React.useContext(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, true);

  return (
    <div
      tabIndex={0}
      className="my-auto inline-block select-none w-[80vw] min-w-[20rem] mx-4"
    >
      <div className="h-max">{children}</div>
    </div>
  );
}
