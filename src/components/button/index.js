/** @jsx jsx */
import { jsx } from '@emotion/core';
import { baseButton, buttonTypeStyles, txtBaseStyle } from './style';

const Button = ({
  clsName, text, disable = false, onClick, variant
}) => (
  <div css={[baseButton]}>
    <button
      disabled={disable}
      onClick={onClick}
      type="button"
      css={[txtBaseStyle, buttonTypeStyles[variant]]}
      className={clsName}
      data-disable={disable}
      style={{ padding: '8px' }}
    >
      {text}
    </button>
  </div>

);

export default (Button);
