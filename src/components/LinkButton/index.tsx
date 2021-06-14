import { withRouter } from 'react-router';

import { Button } from './styles';

const LinkButton = (props: {
  [x: string]: any;
  history: any;
  location: any;
  match: any;
  staticContext: any;
  to: any;
  onClick: any;
}) => {
  const { history, location, match, staticContext, to, onClick, color, height, ...rest } = props;
  return (
    <Button
      {...rest}
      onClick={(event: any) => {
        onClick && onClick(event);
        history.push(to);
      }}
      color={color}
    />
  );
};

export default withRouter(LinkButton);
