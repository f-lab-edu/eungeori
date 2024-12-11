import Image from "next/image";
import { plusIconBox, plusIcon } from "../styles/record.css";
import { useRouter } from "next/navigation";

const PlusIcon = () => {
  const router = useRouter();

  return (
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
  );
};

export default PlusIcon;
