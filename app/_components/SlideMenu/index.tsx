"use client";

import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import type { MenuItem } from "../Menu/types";
import Card from "../Card";
import usePreventBodyScroll from "../usePreventBodyScroll";

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

export default function SlideMenu({ items }: { items: MenuItem[] }) {
  const { disableScroll, enableScroll } = usePreventBodyScroll();

  return (
    <>
      <div className="example max-w-[100dvw]">
        <div onMouseEnter={disableScroll} onMouseLeave={enableScroll}>
          <ScrollMenu onWheel={onWheel}>
            {items.map(({ content, id }) => (
              <Card
                itemId={id} // NOTE: itemId is required for track items
                key={id}
              >
                {content}
              </Card>
            ))}
          </ScrollMenu>
        </div>
      </div>
    </>
  );
}

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isTouchPad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isTouchPad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}
