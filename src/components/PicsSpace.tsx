import { useState, useEffect, useMemo } from "preact/hooks";

export default function PicsSpace({ children }: { children: any }) {
  const picturesComponents = useMemo(() => {
    const pictures = children.props.value.split("</picture>");
    pictures.pop();
    return pictures.map((child: string) => child + "</picture>");
  }, [children]);

  const [placements, setPlacements] = useState<
    { x: number; y: number; rotate: number }[]
  >([]);

  useEffect(() => {
    async function wait() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    function addPlacement() {
      const x = Math.random() * 50 + 25;
      const y = Math.random() * 50 + 25;
      const rotate = Math.random() * 30 - 15;
      setPlacements((placements) => [...placements, { x, y, rotate }]);
    }

    (async function () {
      for (let i = 0; i < picturesComponents.length; ++i) {
        addPlacement();
        await wait();
      }
    })();
  }, []);

  return (
    <div class="mt4 b-y-8 b-main-700 bg-main-700 relative h-150 pics-space">
      <style>
        {`
        .pics-space picture img {
          border-radius: 0.25rem;
        }`}
      </style>
      {placements.map(({ x, y, rotate }, i) => (
        <div
          style={{
            left: x + "%",
            top: y + "%",
            transform: `rotate(${rotate}deg) translateX(-50%) translateY(-50%)`,
          }}
          class="absolute b-4 b-white rounded-md animate-zoom-fade-in transform-origin-cc"
        >
          <div
            class="contents"
            dangerouslySetInnerHTML={{ __html: picturesComponents[i] }}
          ></div>
          <span class="absolute bottom-2 right-2 bg-black/50 text-sm rounded-md text-white">
            {getAlt(picturesComponents[i])}
          </span>
        </div>
      ))}
      {/* {picturesComponents.map((child: any) => (
        <div class="b-2 b-white rounded-md">{child}</div>
      ))} */}
    </div>
  );
}

function getAlt(text: string) {
  return text.match(/alt="([^"]+)"/)![1];
}
