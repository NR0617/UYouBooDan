import { style } from '@mui/system';
import styled from 'styled-components';

export const SignUpContainer = styled.div`
  padding: 10% 7%;
  border: 1px solid #d6d9dc;
  border-radius: 10px;
`;
export const SignUpLogo = styled.div`
  font-weight: 800;
  font-size: 2.4rem;
  color: #4285f4;
  display: inline-block;
  padding: 0.5vh 0.5vh 0.2vh 0.5vh;
  background-color: #f3f3f3;
  margin-bottom: 3vh;
`;
export const SignUpTitle = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 4vh;
`;

// email
export const EmailContainer = styled.div`
  margin-bottom: 3.5vh;
`;
export const EmailTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1vh;
`;
export const EmailInputBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 5.5vh; */
  height: 6.5vh;
  margin-bottom: 1vh;
  button {
    width: 6vw;
    font-size: 1rem;
    color: #4285f4;
    font-weight: 350;
    border: 1px solid #4285f4;
    border-radius: 9px;
    background-color: white;
    cursor: pointer;
    transition-duration: 0.3s;
    :active {
      background-color: #d6d9dc;
    }
  }
`;
export const EmailInputDiv = styled.div`
  border: 1px solid #d6d9dc;
  display: flex;
  justify-content: space-between;
  width: 19vw;
  border-radius: 9px;
  padding: 0 2%;
  input {
    font-size: 1rem;
    width: 80%;
    border: none;
    outline: none;
  }
`;
export const EmailDeleteDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const EmailSuccessMsg = styled.div`
  font-size: 0.86rem;
  color: #00c988;
  display: flex;
  align-items: center;
`;
export const EmailFailureMsg = styled.div`
  font-size: 0.86rem;
  color: #ff2f2f;
  display: flex;
  align-items: center;
`;

// password
// extends -> 상속 개념!
interface ValidAndExist {
  valid: string;
  exist: string;
}
export const PwContainer = styled.div`
  margin-bottom: 3.5vh;
`;
export const PwTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1vh;
`;
export const PwInput = styled.div<ValidAndExist>`
  border: ${(props) =>
    props.valid === '비밀번호가 일치하지 않습니다.' && props.exist
      ? '1px solid red'
      : '1px solid #d6d9dc'};
  background-color: ${(props) =>
    props.valid === '비밀번호가 일치하지 않습니다.' && props.exist
      ? '#FFF7F7'
      : 'white'};
  display: flex;
  justify-content: space-between;
  height: 6.5vh;
  border-radius: 9px;
  padding: 0 2%;
  margin-bottom: 1vh;
  input {
    font-size: 1rem;
    color: ${(props) =>
      props.valid === '비밀번호가 일치하지 않습니다.' && props.exist
        ? '#FF2F2F'
        : 'black'};
    background-color: ${(props) =>
      props.valid === '비밀번호가 일치하지 않습니다.' && props.exist
        ? '#FFF7F7'
        : 'white'};
    width: 80%;
    border: none;
    outline: none;
  }
`;
export const PwDeleteDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const PwVectorDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
// #FFF7F7 -> 약간 핑크빛
export const PwCheckInput = styled.div<ValidAndExist>`
  border: ${(props) =>
    props.valid === '비밀번호가 일치하지 않습니다.' && props.exist
      ? '1px solid red'
      : '1px solid #d6d9dc'};
  background-color: ${(props) =>
    props.valid === '비밀번호가 일치하지 않습니다.' && props.exist
      ? '#FFF7F7'
      : 'white'};
  display: flex;
  justify-content: space-between;
  height: 6.5vh;
  border-radius: 9px;
  padding: 0 2%;
  margin-bottom: 1vh;
  input {
    font-size: 1rem;
    color: ${(props) =>
      props.valid === '비밀번호가 일치하지 않습니다.' && props.exist
        ? '#FF2F2F'
        : 'black'};
    background-color: ${(props) =>
      props.valid === '비밀번호가 일치하지 않습니다.' && props.exist
        ? '#FFF7F7'
        : 'white'};
    width: 80%;
    border: none;
    outline: none;
  }
`;
export const PwCheckDeleteDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const PwCheckVectorDiv = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Notice = styled.div`
  font-size: 0.8rem;
  color: #667085;
  margin-bottom: 1vh;
`;
export const PwSuccessMsg = styled.div`
  font-size: 0.86rem;
  color: #00c988;
  display: flex;
  align-items: center;
`;
export const PwFailureMsg = styled.div`
  font-size: 0.86rem;
  color: #ff2f2f;
  display: flex;
  align-items: center;
`;

// NickName

export const NickContainer = styled.div`
  margin-bottom: 3.5vh;
`;
export const NickTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 1vh;
`;
export const NickInputAndBtn = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6.5vh;
  margin-bottom: 1vh;
  button {
    width: 6vw;
    font-size: 1rem;
    color: #4285f4;
    font-weight: 350;
    border: 1px solid #4285f4;
    border-radius: 9px;
    background-color: white;
    cursor: pointer;
    transition-duration: 0.3s;
    :active {
      background-color: #d6d9dc;
    }
  }
`;
export const NickInputDiv = styled.div`
  border: 1px solid #d6d9dc;
  display: flex;
  justify-content: space-between;
  width: 19vw;
  border-radius: 9px;
  padding: 0 2%;
  input {
    font-size: 1rem;
    width: 80%;
    border: none;
    outline: none;
  }
`;
export const NickSuccessMsg = styled.div`
  font-size: 0.86rem;
  color: #00c988;
  display: flex;
  align-items: center;
`;
export const NickFailureMsg = styled.div`
  font-size: 0.86rem;
  color: #ff2f2f;
  display: flex;
  align-items: center;
`;

// terms 약관동의

export const TermsContainer = styled.div`
  border-top: 1px solid #d6d9dc;
  margin-bottom: 5vh;
  padding-top: 3.5vh;
`;
export const TermsTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
  margin-bottom: 2.5vh;
`;
export const TermsContentOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5vh;
`;
export const TermsOneRadioAndText = styled.div`
  display: flex;
  font-size: 1rem;
  gap: 0.5vw;
  div {
    display: flex;
    align-items: center;
  }
`;
export const TermsOneInfo = styled.div`
  font-size: 0.9rem;
  color: #667085;
  cursor: pointer;
`;
export const TermsContentTwo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5.5vh;
`;
export const TermsTwoRadioAndText = styled.div`
  display: flex;
  font-size: 1rem;
  gap: 0.5vw;
  div {
    display: flex;
    align-items: center;
  }
`;
export const TermsTwoInfo = styled.div`
  font-size: 0.9rem;
  color: #667085;
  cursor: pointer;
`;

// signup Btn
interface Ok {
  isOk: boolean;
}

export const SignUpBtnContainer = styled.div<Ok>`
  button {
    width: 100%;
    height: 7vh;
    border: none;
    border-radius: 9px;
    background-color: ${(props) => (props.isOk ? '#4285f4' : '#7b8c9f')};
    font-size: 1.2rem;
    color: white;
    cursor: pointer;
    transition-duration: 0.3s;
    :active {
      background-color: ${(props) => (props.isOk ? '#d6d9dc' : '#7b8c9f')};
    }
  }
`;
