import { useState } from 'react';
import { FiLock, FiEye, FiEyeOff } from 'react-icons/fi';
import { IconInput } from './style';

interface PanelPasswordInputRequest {
  inputName: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const PanelPasswordInput = ({ inputName, onInputChange }: PanelPasswordInputRequest) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Toggle password visibility
  function handleVisible() {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <IconInput htmlFor="password" id="password">
      {inputName}
      <input
        onChange={onInputChange}
        name="password"
        type={passwordVisible ? 'text' : 'password'}
      />
      <a onClick={handleVisible} id="toggleVisible">
        {passwordVisible ? (
          <FiEyeOff color="#4877d3" size="20" />
        ) : (
          <FiEye color="#4877d3" size="20" />
        )}
      </a>
    </IconInput>
  );
};
