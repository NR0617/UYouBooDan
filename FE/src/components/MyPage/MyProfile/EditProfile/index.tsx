import * as S from './style';
import { useForm } from 'react-hook-form';
import { FaceSvg } from '../../../../assets/face';
import { NICKNAME_REGEX } from '../../../../constants/regex';
import { useEffect, useState } from 'react';
import { DeleteSvg } from '../../../../assets/delete';
import { SuccessSvg } from '../../../../assets/success';
import { FailureSvg } from '../../../../assets/failure';
import { VectorSvg } from '../../../../assets/vector';
import { NoVectorSvg } from '../../../../assets/noVector';
import { overLapNickApi } from '../../../../apis/overLap';
import { PASSWORD_REGEX } from '../../../../constants/regex';
import useCheckPw from '../../../../hooks/signup/useCheckPw';
import axios, { AxiosError, AxiosResponse } from 'axios';
import LocalStorage from '../../../../constants/localstorage';
import SessionStorage from '../../../../constants/sessionstorage';
import { useRouter } from 'next/router';

const EditProfile = ({
  emailData,
  nickData,
  photoData,
  setEditClick,
  setSuccessPw,
}: any) => {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    mode: 'onChange',
  });
  const api = process.env.NEXT_PUBLIC_SERVER_URL;
  const defaultImg = process.env.NEXT_PUBLIC_DEFAULT_IMG;
  const router = useRouter();
  const [avatarPreview, setAvatarPreview] = useState<string>('');
  const [nickClick, setNickClick] = useState<boolean>(false);
  const [imgClick, setImgClick] = useState<boolean>(false);
  const [pwClick, setPwClick] = useState<boolean>(false);
  const [nickMsg, setNickMsg] = useState<string>('');
  const [img, setImg] = useState<string>('');
  const [pwMsg, setPwMsg] = useState<string>('');
  const [vectorOne, setVectorOne] = useState<boolean>(false);
  const [vectorTwo, setVectorTwo] = useState<boolean>(false);
  const { checkPw } = useCheckPw(
    watch('password'),
    watch('passwordCheck'),
    setPwMsg,
  );

  const avatar = watch('profile');
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  useEffect(() => {
    if (watch('nickname') && errors.nickname?.message) {
      setNickMsg('?????????????????? ???????????? ????????????.');
    } else if (watch('nickname') && !errors.nickname?.message) {
      setNickMsg('');
    } else if (!watch('nickname')) {
      setNickMsg('');
    }
  }, [watch('nickname')]);

  useEffect(() => {
    if (watch('profile')) {
      setImg(watch('profile')[0]['name']);
    }
  }, [watch('profile')]);

  useEffect(() => {
    if (watch('passwordCheck')) {
      // password,passwordCheck ??? ?????????????????? ??????????????? ????????? ???????????????????????? ??????????????? ????????? ??????!
      checkPw();
    } else if (!watch('password') && !watch('passwordCheck')) {
      setPwMsg('');
    }
  }, [watch('passwordCheck'), watch('password')]);

  const onValid = (data: any) => {
    if (data.passwordCheck) {
      delete data.passwordCheck;
    }
    if (!data.nickname) {
      delete data.nickname;
    }
    if (!data.profile) {
      delete data.profile;
    }
    if (!data.password) {
      delete data.password;
    }
    if (avatar && avatar.length) {
      const file = avatar[0];
      data.profile = URL.createObjectURL(file).slice(5);
    }
    console.log('??????????????? data : ', data);
    axios
      .patch(`${api}/members/edit`, data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'ngrok-skip-browser-warning': 'any',
          Authorization:
            LocalStorage.getItem('accesstoken') !== null
              ? `Bearer ${LocalStorage.getItem('accesstoken')}`
              : SessionStorage.getItem('accesstoken') !== null
              ? `Bearer ${SessionStorage.getItem('accesstoken')}`
              : null,
        },
      })
      .then((res: AxiosResponse) => {
        console.log('????????????');
        console.log('???????????? res : ', res);
        setEditClick(false);
        setSuccessPw(false);
        router.push('main');
      })
      .catch((err: AxiosError) => {
        console.log('?????? ?????? err : ', err.message);
      });
  };

  const errorImgHandler = (e: any) => {
    e.target.src = defaultImg;
  };

  return (
    <S.EditContainer>
      <S.EditTitleDiv>??????????????????</S.EditTitleDiv>
      <S.EditAdditional>?????? ??? ???????????? ????????? ???????????????.</S.EditAdditional>
      <form onSubmit={handleSubmit(onValid)}>
        <S.ImgPreviewDiv
          onClick={() => {
            setNickClick(false);
          }}
        >
          {photoData && !watch('profile') ? (
            <img src={`blob:${photoData}`} onError={errorImgHandler} />
          ) : (
            // <FaceSvg />
            <img src={avatarPreview} />
          )}
        </S.ImgPreviewDiv>
        <S.NickContainer>
          <S.NickTitle>?????????</S.NickTitle>

          {nickClick ? (
            <>
              <S.NickBtnCLickAfter>
                <S.NickInputDiv>
                  <input
                    type="text"
                    placeholder="???????????? ??????????????????."
                    {...register('nickname', {
                      required: '????????? ????????????',
                      pattern: {
                        value: NICKNAME_REGEX,
                        message: '?????????????????? ???????????? ????????????.',
                      },
                    })}
                  />
                  <S.NickDeleteDiv
                    onClick={() => {
                      setValue('nickname', '');
                    }}
                  >
                    {watch('nickname') ? <DeleteSvg /> : <></>}
                  </S.NickDeleteDiv>
                </S.NickInputDiv>
                <button
                  type="button"
                  onClick={() => {
                    overLapNickApi(watch('nickname'), setNickMsg);
                  }}
                >
                  ????????????
                </button>
              </S.NickBtnCLickAfter>
              {(watch('nickname') && errors.nickname?.message && nickMsg) ||
              nickMsg === '?????????????????? ???????????? ????????????.' ||
              nickMsg === '????????? ????????? ?????????.' ? (
                <S.NickFailureMsg>
                  <FailureSvg />
                  {nickMsg}
                </S.NickFailureMsg>
              ) : watch('nickname') &&
                !errors.nickname?.message &&
                nickMsg === '??????????????? ????????? ?????????.' ? (
                <S.NickSuccessMsg>
                  <SuccessSvg />
                  {nickMsg}
                </S.NickSuccessMsg>
              ) : (
                <></>
              )}
            </>
          ) : (
            <S.NickBtnClickBefore>
              <S.NickValue>{nickData}</S.NickValue>
              <button
                type="button"
                onClick={() => {
                  setNickClick(true);
                }}
              >
                ????????? ??????
              </button>
            </S.NickBtnClickBefore>
          )}
        </S.NickContainer>
        <S.ProfileImgContainer>
          <S.ProfileImgTitle imgClick={imgClick}>
            ????????? ????????? ??????
          </S.ProfileImgTitle>
          <>{console.log(watch('profile'))}</>
          {imgClick ? (
            <S.ImgEditBtnClickAfter>
              <S.ImgValueInputDiv>
                <input
                  type="text"
                  placeholder={photoData || '????????????.jpg'}
                  defaultValue={watch('profile') ? img : ''}
                  disabled
                />
                {watch('profile') ? (
                  <S.ImgDeleteDiv
                    onClick={() => {
                      setValue('profile', '');
                      setImg('');
                    }}
                  >
                    <DeleteSvg />
                  </S.ImgDeleteDiv>
                ) : (
                  <></>
                )}
              </S.ImgValueInputDiv>
              <S.ImgInputLabel htmlFor="file">???????????????</S.ImgInputLabel>
              <input
                id="file"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                {...register('profile')}
              />
            </S.ImgEditBtnClickAfter>
          ) : (
            <S.ImgEditBtnClickBefore>
              <button
                type="button"
                onClick={() => {
                  setImgClick(!imgClick);
                }}
              >
                ????????? ??????
              </button>
            </S.ImgEditBtnClickBefore>
          )}
        </S.ProfileImgContainer>
        <S.HorizonDiv></S.HorizonDiv>
        <S.EmailContainer>
          <S.EmailTitle>?????????</S.EmailTitle>
          <S.EmailValue>{emailData}</S.EmailValue>
        </S.EmailContainer>
        <S.PwContainer>
          <S.PwTitle>????????????</S.PwTitle>
          {pwClick ? (
            <S.PwEditClickAfter>
              <S.PwInput valid={pwMsg} exist={watch('passwordCheck')}>
                <input
                  type={vectorOne ? 'text' : 'password'}
                  placeholder="??????????????? ??????????????????."
                  {...register('password', {
                    required: '???????????? ????????????.',
                    pattern: {
                      value: PASSWORD_REGEX,
                      message: '????????????????????? ???????????? ????????????.',
                    },
                  })}
                />
                <S.PwDeleteDiv
                  onClick={() => {
                    setValue('password', '');
                  }}
                >
                  {watch('password') ? <DeleteSvg /> : <></>}
                </S.PwDeleteDiv>
                <S.PwVectorDiv
                  onClick={() => {
                    setVectorOne(!vectorOne);
                  }}
                >
                  {vectorOne ? <VectorSvg /> : <NoVectorSvg />}
                </S.PwVectorDiv>
              </S.PwInput>
              <S.PwCheckInput valid={pwMsg} exist={watch('passwordCheck')}>
                <input
                  type={vectorTwo ? 'text' : 'password'}
                  placeholder="??????????????? ??????????????????."
                  {...register('passwordCheck', {
                    required: '???????????? ????????? ??????.',
                    pattern: {
                      value: PASSWORD_REGEX,
                      message: '????????????????????? ???????????? ????????????.',
                    },
                  })}
                />
                <S.PwCheckDeleteDiv
                  onClick={() => {
                    setValue('passwordCheck', '');
                  }}
                >
                  {watch('passwordCheck') ? <DeleteSvg /> : <></>}
                </S.PwCheckDeleteDiv>
                <S.PwCheckVectorDiv
                  onClick={() => {
                    setVectorTwo(!vectorTwo);
                  }}
                >
                  {vectorTwo ? <VectorSvg /> : <NoVectorSvg />}
                </S.PwCheckVectorDiv>
              </S.PwCheckInput>
              <S.Notice>
                *????????????,??????,???????????? ???????????? 8~15?????? ??????????????????.
              </S.Notice>
              {!errors.password?.message &&
              pwMsg === '??????????????? ???????????????.' ? (
                <S.PwSuccessMsg>
                  <SuccessSvg />
                  {pwMsg}
                </S.PwSuccessMsg>
              ) : !errors.password?.message &&
                pwMsg === '??????????????? ???????????? ????????????.' ? (
                <S.PwFailureMsg>
                  <FailureSvg />
                  <>{pwMsg}</>
                </S.PwFailureMsg>
              ) : errors.password?.message && watch('password') ? (
                <S.PwFailureMsg>
                  <FailureSvg />
                  <>{errors.password?.message}</>
                </S.PwFailureMsg>
              ) : (
                <></>
              )}
            </S.PwEditClickAfter>
          ) : (
            <S.PwEditClickBefore>
              <S.PwInputBeforeDiv>
                <input placeholder="***********" type="password" disabled />
              </S.PwInputBeforeDiv>
              <button
                type="button"
                onClick={() => {
                  setPwClick(true);
                }}
              >
                ???????????? ??????
              </button>
            </S.PwEditClickBefore>
          )}
        </S.PwContainer>
        <S.BtnContainer>
          <S.EditCancleBtnDiv>
            <button
              type="button"
              onClick={() => {
                setValue('nickname', '');
                setValue('profile', '');
                setValue('password', '');
                setValue('passwordCheck', '');
                setNickClick(false);
                setImgClick(false);
                setPwClick(false);
              }}
            >
              ????????????
            </button>
          </S.EditCancleBtnDiv>
          <S.EditSaveBtnDiv>
            {watch('profile') || watch('nickname') || watch('password') ? (
              <button type="submit" disabled={isSubmitting}>
                ????????????
              </button>
            ) : (
              <button type="button" disabled>
                ????????????
              </button>
            )}
          </S.EditSaveBtnDiv>
        </S.BtnContainer>
      </form>
    </S.EditContainer>
  );
};

export default EditProfile;
