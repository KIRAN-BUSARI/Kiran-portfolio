import { encode } from "qss";

interface LinkPreviewDemoProps {
  url: string;
  title: string;
  fallbackImageSrc: string;
  useLivePreview?: boolean;
}

const LinkPreviewDemo = ({
  url,
  title,
  fallbackImageSrc,
  useLivePreview = true,
}: LinkPreviewDemoProps) => {
  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": false,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": 1440,
    "viewport.height": 900,
  });

  const previewSrc = `https://api.microlink.io/?${params}`;
  const imageSrc = useLivePreview ? previewSrc : fallbackImageSrc;

  return (
    <div className="overflow-hidden rounded-t-[4px]">
      <img
        src={imageSrc}
        alt={`Live preview of ${title}`}
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = fallbackImageSrc || "/fallback-image.png";
        }}
        className="h-auto w-full transform object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
  );
};

export default LinkPreviewDemo;
