"use client";

import Image from "next/image";
import { caption2, paragraph, paragraph3, semiBold } from "../styles/font.css";
import { colors, gray150, gray300, gray400 } from "../styles/colors.css";
import { paddingSprinkles } from "../styles/padding.css";
import Memo from "../components/common/Memo";
import Popup from "../components/common/Popup";
import { useRouter } from "next/navigation";
import { flexSprinklesFc } from "../components/common/utils/flex";
import Button from "../components/common/Button";
import { useState } from "react";
import { pointer } from "../styles/global.css";
import { recordDateSection, recordDate, plusIconBox, plusIcon } from "./record.css";
import DateCircle from "../components/record/DateCircle";

const page = () => {
  const router = useRouter();
  const [click, setClick] = useState(false);
  return (
    <>
      {click && (
        <Popup text="내용을 삭제하시겠습니까?">
          <div className={`${flexSprinklesFc({ gap: "16px" })} ${pointer}`}>
            <Button
              text="취소"
              onClick={() => {
                setClick(false);
              }}
            />
            <Button text="삭제" color={colors.white} background={colors.primary} />
          </div>
        </Popup>
      )}
      <section>
        <article
          className={`${flexSprinklesFc({
            alignItems: "center",
            justifyContent: "space-between",
          })} ${recordDateSection}`}
        >
          <div
            className={flexSprinklesFc({
              alignItems: "center",
              gap: "4px",
            })}
          >
            <p className={`${semiBold} ${paragraph}`}>2024.09</p>
            <Image src="/svgs/drop.svg" alt="icon" width={10} height={6} />
          </div>
          <p className={`${caption2} ${gray300}`}>오늘 하루를 기록해 볼까요?</p>
        </article>
        <article className={paddingSprinkles({ paddingBottom: "s28" })}>
          <div
            className={`${flexSprinklesFc({
              justifyContent: "space-around",
            })} ${gray400} ${paragraph3} ${paddingSprinkles({
              paddingBottom: "s24",
            })}`}
          >
            <p>일</p>
            <p>월</p>
            <p>화</p>
            <p>수</p>
            <p>목</p>
            <p>금</p>
            <p>토</p>
          </div>
          <div className={recordDate}>
            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>

            <div
              className={flexSprinklesFc({
                flexDirection: "column",
                alignItems: "center",
              })}
            >
              <DateCircle date="1" />
              <p className={`${semiBold} ${gray150}`}>-</p>
            </div>
          </div>
        </article>
        <article
          className={`${flexSprinklesFc({
            flexDirection: "column",
            gap: "8px",
          })}`}
        >
          <Memo
            onClick={() => {
              setClick(true);
            }}
          />
          <Memo />
          <Memo />
        </article>

        <div
          className={plusIconBox}
          onClick={() => {
            router.push("/info/time");
          }}
        >
          <div className={plusIcon}>
            <Image src="/svgs/plus.svg" alt="add" width={10} height={10} />
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
