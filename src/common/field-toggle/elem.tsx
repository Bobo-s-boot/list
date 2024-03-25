import styled from 'styled-components';
import { Spacing } from '../../theme';
import { CardElem } from '../card';
import { GridElem } from '../grid';
import { TextElem } from '../text';
import { ToggleElem } from '../toggle';

export const Elem: React.FC<{
  handleClick: Function;
  checked: boolean;
  titleTid: string;
  descriptionTid?: string;
}> = ({ handleClick, checked, descriptionTid, titleTid }) => {
  return (
    <Card handleClick={handleClick}>
      <CardContent>
        <GridElem spacing={1}>
          <TextElem tid={titleTid} type="bold" size="main" />
          {descriptionTid && <TextElem tid={descriptionTid} size="default" />}
        </GridElem>
        <ToggleElem checked={checked} />
      </CardContent>
    </Card>
  );
};

const Card = styled(CardElem)`
  padding: ${Spacing(3)} ${Spacing(3.5)};
`;

const CardContent = styled.div`
  display: flex;
  align-items: center;
`;
