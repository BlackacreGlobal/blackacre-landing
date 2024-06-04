import React, { useEffect } from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export default function SlideCard({
  itemId,
  children,
  nowVisible,
  width,
}: {
  itemId: string;
  children?: React.ReactNode;
  nowVisible: (index: string) => void;
  width?: boolean;
}) {
  const visibility = React.useContext(VisibilityContext);
  const isVisible = visibility.useIsVisible(itemId, true);

  useEffect(() => {
    nowVisible(itemId);
  }, [isVisible]);

  return (
    <div
      tabIndex={0}
      className={`my-auto inline-block select-none ${
        width ? " w-[96vw] " : " w-[80vw] "
      }  min-w-[20rem] mx-4 h-full`}
    >
      <div className="h-full">{children}</div>
    </div>
  );
}
