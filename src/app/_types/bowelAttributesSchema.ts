import { StoolAttributes } from '../_store/info/infoStore';

export type BowelAttributes = {
  id: string;
  uuid: string;
  bowel_time: string;
  stool_attributes: StoolAttributes;
  record_note: string;
  user_id: string;
};
