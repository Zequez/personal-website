import { useMemo, useState } from "preact/hooks";
import cx from "classnames";
import ArrowRight from "virtual:icons/fa-solid/arrow-right";
import ArrowLeft from "virtual:icons/fa-solid/arrow-left";

const PortfolioGallery = ({
  media,
  mediaAlt,
}: {
  media: { src: string; srcSet: { attribute: string } }[];
  mediaAlt: string[];
}) => {
  const [current, setCurrent] = useState(0);

  function goNext(i: number) {
    setCurrent(current < media.length - 1 ? current + 1 : 0);
  }

  function goPrev(i: number) {
    setCurrent(current > 0 ? current - 1 : media.length - 1);
  }

  return (
    <div>
      <div class="relative w-full h-60 sm:h-96 flexcc rounded-t-md flex-shrink-0 overflow-hidden bg-black/90">
        {media.length > 1 ? (
          <button
            class="absolute top-0 left-0  w-16 sm:w-24 bg-black/20 h-full flexcc opacity-0 hover:opacity-100 cursor-pointer"
            onClick={() => goPrev(current)}
          >
            <ArrowLeft class="text-2xl sm:text-4xl" />
          </button>
        ) : null}
        {/* Image */}
        <img
          src={media[current].src}
          srcSet={media[current].srcSet.attribute}
          loading="lazy"
          class="h-full w-full object-contain"
          title={mediaAlt[current]}
          alt={mediaAlt[current] || "Screenshot"}
        />
        {mediaAlt[current] ? (
          <div class="absolute bottom-0 w-full flexcc text-center px2">
            <div class="p2 rounded-t-md bg-black/80">{mediaAlt[current]}</div>
          </div>
        ) : null}
        {media.length > 1 ? (
          <button
            class="absolute top-0 right-0 w-16 sm:w-24 bg-black/20 h-full flexcc opacity-0 hover:opacity-100 cursor-pointer"
            onClick={() => goNext(current)}
          >
            <ArrowRight class="text-2xl sm:text-4xl" />
          </button>
        ) : null}
      </div>
      {media.length > 1 ? (
        <div class="flexcc bg-black/20 flex-wrap">
          {media.map((m, i) => (
            <button
              class={cx("h16 w16 sm:h-24 sm:w-24", {
                "b-4 b-black/60": i === current,
              })}
              onClick={() => setCurrent(i)}
            >
              <img
                src={m.src}
                srcSet={m.srcSet.attribute}
                loading="lazy"
                class="h-full w-full object-cover"
                title={mediaAlt[i]}
                alt={mediaAlt[i] || "Screenshot"}
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioGallery;
