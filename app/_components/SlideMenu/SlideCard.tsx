import React, { useEffect } from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export default function SlideCard({
  itemId,
  children,
  nowVisible,
}: {
  itemId: string;
  children?: React.ReactNode;
  nowVisible: (index: string) => void;
}) {
  const visibility = React.useContext(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, true);

  useEffect(() => {
    nowVisible(itemId);
  }, [isVisible, itemId, nowVisible]);

  return (
    <div
      tabIndex={0}
      className="my-auto inline-block select-none w-[80vw] min-w-[20rem] mx-4"
    >
      <div className="h-max">{children}</div>
    </div>
  );
}
