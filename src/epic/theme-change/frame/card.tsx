import { CardElem } from '../../../common/card';
import { RadioElem } from '../../../common/radio';
import { TextElem } from '../../../common/text';
import styled from 'styled-components';
import { Spacing } from '../../../theme';

export const CardComponent: React.FC<{
  titleTid: string;
  infoTid: string;
  icon: string;
  handleClick?: any;
  active?: boolean;
  id: string;
}> = ({ titleTid, infoTid, icon, handleClick, active, id }) => {
  return (
    <Card handleClick={() => handleClick(id)} wide control>
      <CardContent>
        <TextContainer>
          <RadioElem gap={3} titleTid={titleTid} active={active} />
          <TextElem tid={infoTid} color="textThird" lineHeight />
        </TextContainer>
        <Img src={icon} />
      </CardContent>
    </Card>
  );
};

const Card = styled(CardElem)`
  padding: ${Spacing(5)} ${Spacing(4)} ${Spacing(0)};
`;

const Img = styled.img`
  height: 100px;
  width: auto;
  align-self: flex-end;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing(5)};
  padding-bottom: ${Spacing(5)};
`;
const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${Spacing(8)};
`;
