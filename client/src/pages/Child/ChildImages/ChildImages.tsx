import React, { FC, useEffect, useMemo, useState } from "react";
import { ChildImage, ChildImagesBlock, ChildImagesLine, ChildImagesModal, ChildImagesModalImage, ChildImagesModalImageArrow, ChildImagesModalImageBlock, ChildImagesModalImageClose } from "./ChildImagesStyles";
import { Child, ChildImage as ChildImageEntity } from "../../../types/child";
import { log } from "console";

interface IChildImages {
  images: ChildImageEntity[];
}

interface IImage {
  type: "short" | "wide";
  image: HTMLImageElement;
}

const ChildImages: FC<IChildImages> = ({ images }) => {
  const [chunks, setChunks] = useState<IImage[][]>([]);
  const [chosenImageIdx, setChosenImageIdx] = useState<number | null>(null);

  useEffect(() => {
    let imagesCounter = images.length;

    let totalImages: HTMLImageElement[] = [];
    let shortImages: HTMLImageElement[] = [];
    let wideImages: HTMLImageElement[] = [];

    images.forEach((image) => {
      const imageObj = new Image();
      imageObj.src = image.url;

      imageObj.addEventListener("load", () => {
        imagesCounter -= 1;

        const widthPerHeight = imageObj.width / imageObj.height;

        if (widthPerHeight < 1) {
          shortImages.push(imageObj);
        } else {
          wideImages.push(imageObj);
        }

        totalImages.push(imageObj);

        if (imagesCounter === 0) {
          const resultImages: IImage[][] = [];

          // Четный
          let i = 0;
          while (wideImages.length || shortImages.length) {
            i += 1;

            if (i % 2 === 0) {
              // 1 wide or 3 short or short-wide

              if (shortImages.length && wideImages.length) {
                resultImages.push([
                  {
                    type: "short",
                    image: shortImages.pop() as any,
                  },
                  {
                    type: "wide",
                    image: wideImages.pop() as any,
                  },
                ]);

                continue;
              }

              if (wideImages.length) {
                resultImages.push([
                  {
                    type: "wide",
                    image: wideImages.pop() as any,
                  },
                ]);

                continue;
              }

              if (shortImages.length) {
                const result: IImage[] = [];

                for (let i = 0; i < 3; i++) {
                  const image = shortImages.pop();
                  if (image) {
                    result.push({
                      type: "short",
                      image,
                    });
                  }
                }

                resultImages.push(result);

                continue;
              }
            } else {
              // 1 wide or wide-short

              if (wideImages.length) {
                resultImages.push([
                  {
                    type: "wide",
                    image: wideImages.pop() as any,
                  },
                ]);

                continue;
              }

              if (wideImages.length && shortImages.length) {
                resultImages.push([
                  {
                    type: "wide",
                    image: wideImages.pop() as any,
                  },
                  {
                    type: "short",
                    image: shortImages.pop() as any,
                  },
                ]);

                continue;
              }

              if (shortImages.length) {
                const result: IImage[] = [];

                for (let i = 0; i < 3; i++) {
                  const image = shortImages.pop();
                  if (image) {
                    result.push({
                      type: "short",
                      image,
                    });
                  }
                }

                resultImages.push(result);

                continue;
              }
            }

            // if (i % 2 !== 0) {
            //   if (i % 3 === 0) {
            //     if (wideImages.length && shortImages.length) {
            //       resultImages.push([
            //         {
            //           type: "short",
            //           image: shortImages.pop() as any,
            //         },
            //         {
            //           type: "wide",
            //           image: wideImages.pop() as any,
            //         },
            //       ]);
            //       continue;
            //     }
            //   } else {
            //     // First

            //     if (wideImages.length && shortImages.length) {
            //       resultImages.push([
            //         {
            //           type: "wide",
            //           image: wideImages.pop() as any,
            //         },
            //         {
            //           type: "short",
            //           image: shortImages.pop() as any,
            //         },
            //       ]);
            //       continue;
            //     }
            //   }

            //   if (shortImages.length) {
            //     const result: IImage[] = [];

            //     for (let i = 0; i < 3; i++) {
            //       const image = shortImages.pop();
            //       if (image) {
            //         result.push({
            //           type: "short",
            //           image,
            //         });
            //       }
            //     }

            //     resultImages.push(result);
            //     continue;
            //   }

            //   if (wideImages.length) {
            //     const image = wideImages.pop();
            //     if (image) {
            //       resultImages.push([
            //         {
            //           type: "wide",
            //           image,
            //         },
            //       ]);
            //     }

            //     continue;
            //   }
            // }
          }

          setChunks(resultImages);
        }
      });
    });
  }, [images]);

  return (
    <ChildImagesBlock>
      {chunks.map((imageChunk, idx) => {
        return (
          <ChildImagesLine key={idx}>
            {imageChunk.map(({ image, type }, imageIdx) => {
              return <ChildImage src={image.src} key={image.id} type={type} onClick={() => setChosenImageIdx(imageIdx + (chunks[idx - 1]?.length ?? 0))} />;
            })}
          </ChildImagesLine>
        );
      })}

      {chosenImageIdx !== null && (
        <ChildImagesModal onClick={() => setChosenImageIdx(null)}>
          <ChildImagesModalImageBlock onClick={(e) => e.stopPropagation()}>
            {chosenImageIdx !== 0 && <ChildImagesModalImageArrow alt="arrow" src="/images/arrow_nav.svg" side="left" onClick={() => setChosenImageIdx((prev) => (prev as number) - 1)} />}
            {chosenImageIdx !== images.length - 1 && <ChildImagesModalImageArrow alt="arrow" src="/images/arrow_nav.svg" side="right" onClick={() => setChosenImageIdx((prev) => (prev as number) + 1)} />}

            <ChildImagesModalImage src={chunks.flat()[chosenImageIdx]?.image.src} />
            <ChildImagesModalImageClose alt="close" src="/images/close.svg" onClick={() => setChosenImageIdx(null)} />
            {/* setChosenImageIdx((prev) => (prev ? prev + 1 : null)) */}
          </ChildImagesModalImageBlock>
        </ChildImagesModal>
      )}
    </ChildImagesBlock>
  );
};

export default ChildImages;
