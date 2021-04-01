/** @jsx jsx */
import { jsx } from '@emotion/core';
import style from './style';
// import { Close } from '../../../assets/icons';

const Input = props => {
  const {
    value, label, handleChange, onClear, handleBlur, countryCode, keyType
  } = props;
  const {
    inputLabel, closeIcon, isFocusedStyle, inputStyle, inputContainer
  } = style;

  return (
    <div style={{ position: 'relative' }}>
      <div css={[inputLabel, isFocusedStyle]}>{label}</div>

      <div css={inputContainer}>
        <input
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          css={inputStyle}
          type={keyType}
        />
        {/* <div css={closeIcon} onClick={onClear}>
          <img src={Close} alt="close" style={{ width: '100%' }} />
        </div> */}
      </div>
    </div>
  );
};

export default Input;
