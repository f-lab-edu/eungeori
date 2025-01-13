import { paragraph2, semiBold } from '@/app/_styles/font.css';
import { flexSprinklesFc } from './utils/flex';
import { popupContents, popupWrapper } from './popup.css';
import { usePopupStore } from '@/app/_store/popup/popupStore';

const Popup = ({ children }: { children: React.ReactNode }) => {
  const message = usePopupStore((state) => state.message);

  return (
    <section className={popupWrapper}>
      <article
        className={`${popupContents} ${flexSprinklesFc({ flexDirection: 'column', gap: '24px' })}`}
      >
        <p className={`${paragraph2} ${semiBold}`}>{message}</p>
        {children}
      </article>
    </section>
  );
};

export default Popup;
