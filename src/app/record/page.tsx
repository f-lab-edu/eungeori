import Image from "next/image";
import { flexSprinklesFc } from "../components/common/utils/flex";
import { caption2, paragraph, paragraph2, semiBold } from "../styles/font.css";
import { gray150, gray300, gray400 } from "../styles/colors.css";
import { recordDate, recordDateSection } from "../styles/record/record.css";
import { paddingSprinkles } from "../styles/padding.css";
import DateCircle from "../components/record/DateCircle";
import Memo from "../components/common/Memo";

const page = () => {
  return (
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
          })} ${gray400} ${paragraph2} ${paddingSprinkles({
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
        <Memo />
        <Memo />
        <Memo />
      </article>
    </section>
  );
};

export default page;
