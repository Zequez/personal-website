import { useMemo } from "preact/hooks";
import ArrowRight from "virtual:icons/fa-solid/arrow-right";
import ArrowLeft from "virtual:icons/fa-solid/arrow-left";

const PortfolioGallery = ({
  media,
}: {
  media: { src: string; srcSet: { attribute: string } }[];
}) => {
  return (
    <div>
      <div class="relative w-full h-60 sm:h-96 flexcc rounded-t-md flex-shrink-0 overflow-hidden">
        <button class="absolute top-0 left-0 w-24 bg-black/20 h-full flexcc opacity-0 hover:opacity-100">
          <ArrowLeft class="text-4xl" />
        </button>
        {/* Image */}
        <img
          src={media[0].src}
          srcSet={media[0].srcSet.attribute}
          loading="lazy"
          class="h-full w-full object-contain"
          alt="Screenshot"
        />
        <div class="absolute top-0 right-0 w-24 bg-black/20 h-full flexcc opacity-0 hover:opacity-100">
          <ArrowRight class="text-4xl" />
        </div>
      </div>
      <div class="flexcc h-24 bg-black/10">
        {media.map((m, i) => (
          <img
            src={m.src}
            srcSet={m.srcSet.attribute}
            loading="lazy"
            class="h-24 w-24 object-cover"
            alt="Screenshot thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGallery;
