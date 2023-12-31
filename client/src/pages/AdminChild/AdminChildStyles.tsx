import styled, { keyframes } from "styled-components";
import { FC, PropsWithChildren, useRef } from "react";
import pxIntoRem from "../../utils/pxIntoRem";
import AvatarEditor from "react-avatar-editor";
import ReactDatePicker from "react-datepicker";

const AdminChildBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: #d9d9d9;
  padding-bottom: ${pxIntoRem(30)};
`;

const AdminChildContent = styled.div`
  display: flex;
  padding-top: ${pxIntoRem(30)};

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media (max-width: 600px) {
    align-items: center;
  }
`;

const AdminChildBackButton = styled.button`
  font-family: Inter;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  background-color: #6854fc;
  color: #ffffff;
  width: ${pxIntoRem(100)};
  height: ${pxIntoRem(50)};
  border: ${pxIntoRem(3)} solid #6854fc;
  border-radius: ${pxIntoRem(20)};
`;

const AdminChildInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pxIntoRem(10)};
  list-style: none;
  padding: 0px ${pxIntoRem(60)} 0px;
  width: 100%;
  gap: ${pxIntoRem(15)};

  @media (max-width: 600px) {
    align-items: center;
  }
`;

const AdminChildInfoContentItem = styled.li`
  display: flex;
  flex-direction: column;

  & .react-datepicker__navigation {
    display: none;
  }

  & .react-datepicker__month-read-view {
    visibility: initial !important;
  }

  & .react-datepicker__year-read-view--down-arrow,
  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__month-year-read-view--down-arrow,
  .react-datepicker__navigation-icon::before {
    width: ${pxIntoRem(9)};
    height: ${pxIntoRem(9)};
    border-width: ${pxIntoRem(2.5)} ${pxIntoRem(2.5)} 0 0;
    right: ${pxIntoRem(-15)};
    top: ${pxIntoRem(1)};
  }

  @media (max-width: 395px) {
    width: 100%;
  }
`;

const AdminChildInfoContentItemText = styled.h2`
  color: #6854fc;
  font-family: Inter;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: ${pxIntoRem(5)};
`;

const AdminChildInfoContentItemDatePicker = styled(ReactDatePicker)`
  font-family: Inter;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: ${pxIntoRem(394)};
  height: ${pxIntoRem(42)};
  border-radius: ${pxIntoRem(1)};
  border: ${pxIntoRem(3)} solid #6854fc;
  background: #fff;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(4)} 0px rgba(0, 0, 0, 0.25);
  padding-left: ${pxIntoRem(5)};
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 395px) {
    width: 100%;
  }
`;

const AdminChildInfoContentItemInput = styled.input`
  font-family: Inter;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: ${pxIntoRem(394)};
  height: ${pxIntoRem(42)};
  border-radius: ${pxIntoRem(1)};
  border: ${pxIntoRem(3)} solid #6854fc;
  background: #fff;
  box-shadow: 0px ${pxIntoRem(4)} ${pxIntoRem(4)} 0px rgba(0, 0, 0, 0.25);
  padding-left: ${pxIntoRem(5)};
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 395px) {
    width: 100%;
  }
`;

const AdminChildFileInput = styled.input`
  display: none;
`;

const AdminChildAvatar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 900px) {
    margin-top: ${pxIntoRem(30)};
  }
`;

const AdminChildAvatarTitle = styled.h2`
  color: #6854fc;
  font-family: Inter;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: ${pxIntoRem(5)};
`;

const AdminChildAvatarImageBlock = styled.img`
  width: ${pxIntoRem(500)}!important;
  height: ${pxIntoRem(500)}!important;
  border-radius: ${pxIntoRem(20)};
  border-radius: ${pxIntoRem(300)};
  border: ${pxIntoRem(3)} solid #6854fc;
  background: #fff;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 395px) {
    width: ${pxIntoRem(350)}!important;
    height: ${pxIntoRem(350)}!important;
  }
`;

interface IAdminChildAvatar {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  src: string;
}

const AdminChildAvatarImage: FC<IAdminChildAvatar> = ({ onChange, src }) => {
  const input = useRef<HTMLInputElement | null>(null);

  function openInput() {
    input.current?.click();
  }

  return (
    <>
      <AdminChildFileInput type="file" accept="image/png, image/jpeg" ref={input} onChange={onChange} />
      <AdminChildAvatarImageBlock onClick={openInput} src={src} />
    </>
  );
};

const AdminChildAvatarEditor = styled(AvatarEditor)`
  width: ${pxIntoRem(500)}!important;
  height: ${pxIntoRem(500)}!important;
  border-radius: ${pxIntoRem(20)};
  border: ${pxIntoRem(3)} solid #6854fc;
  background: #fff;
  object-fit: cover;
  cursor: pointer;

  @media (max-width: 395px) {
    width: ${pxIntoRem(350)}!important;
    height: ${pxIntoRem(350)}!important;
  }
`;

const AdminChildAvatarScale = styled.input`
  accent-color: #6854fc;
  -webkit-appearance: none;
  margin-right: 15px;
  width: ${pxIntoRem(200)};
  height: 7px;
  background: #6854fc;
  border-radius: ${pxIntoRem(5)};
  margin: ${pxIntoRem(15)} 0px ${pxIntoRem(10)};

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${pxIntoRem(20)};
    width: ${pxIntoRem(20)};
    border-radius: 50%;
    background: #ffffff;
    border: ${pxIntoRem(1)} solid #6854fc;
    cursor: pointer;
  }
`;

const AdminChildAvatarButtonBlock = styled.button`
  font-family: Inter;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  background-color: #ffffff;
  color: #6854fc;
  width: ${pxIntoRem(300)};
  height: ${pxIntoRem(70)};
  border: ${pxIntoRem(3)} solid #6854fc;
  border-radius: ${pxIntoRem(50)};
  margin-top: ${pxIntoRem(5)};
`;

interface IAdminChildAvatarButton {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const AdminChildAvatarButton: FC<PropsWithChildren<IAdminChildAvatarButton>> = ({ onChange, children }) => {
  const input = useRef<HTMLInputElement | null>(null);

  function openInput() {
    input.current?.click();
  }

  return (
    <>
      <AdminChildFileInput type="file" accept="image/gif,image/jpeg,image/jpg,image/png" ref={input} onChange={onChange} />
      <AdminChildAvatarButtonBlock onClick={openInput}>{children}</AdminChildAvatarButtonBlock>
    </>
  );
};

const AdminChildImages = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${pxIntoRem(30)};
  padding-left: ${pxIntoRem(60)};

  @media (max-width: 600px) {
    align-items: center;
    padding-left: 0px;
  }
`;

const AdminChildImagesTitle = styled.h2`
  color: #6854fc;
  font-family: Inter;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const AdminChildImagesBody = styled.div`
  display: grid;
  grid-auto-rows: auto;
  margin-top: ${pxIntoRem(10)};
  gap: ${pxIntoRem(10)};
`;

const AdminChildImageBlock = styled.div`
  position: relative;
  width: fit-content;
  max-width: ${pxIntoRem(600)};
`;

const AdminChildImage = styled.img`
  border: ${pxIntoRem(3)} solid #6854fc;
  background: #fff;
  max-width: 100%;
`;

const AdminChildImageDelete = styled.img`
  position: absolute;
  right: ${pxIntoRem(5)};
  top: ${pxIntoRem(5)};
  width: ${pxIntoRem(30)};
  height: ${pxIntoRem(30)};
  padding: ${pxIntoRem(2)};
  border-radius: ${pxIntoRem(5)};
  background-color: #6854fc;
  cursor: pointer;
`;

const AdminChildImageAddBlock = styled.button`
  border: ${pxIntoRem(3)} solid #6854fc;
  background: #fff;
  width: ${pxIntoRem(250)};
  height: ${pxIntoRem(250)};
  cursor: pointer;
`;

interface IAdminChildImageAdd {
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
}

const AdminChildImageAdd: FC<IAdminChildImageAdd> = ({ onChange }) => {
  const input = useRef<HTMLInputElement | null>(null);

  function openInput() {
    input.current?.click();
  }

  return (
    <>
      <AdminChildFileInput type="file" accept="image/gif,image/jpeg,image/jpg,image/png" ref={input} onChange={onChange} />
      <AdminChildImageAddBlock onClick={openInput} />
    </>
  );
};

const AdminChildButtons = styled.div`
  display: flex;
  align-items: center;
  padding: ${pxIntoRem(60)} ${pxIntoRem(60)} 0px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

interface IAdminChildButton {
  isActive?: boolean;
}

const AdminChildButton = styled.button<IAdminChildButton>`
  font-family: Inter;
  font-size: ${pxIntoRem(20)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? "#6854fc" : "#ffffff")};
  color: ${({ isActive }) => (isActive ? "#ffffff" : "#6854fc")};
  width: ${pxIntoRem(300)};
  height: ${pxIntoRem(70)};
  border: ${pxIntoRem(3)} solid #6854fc;
  border-radius: ${pxIntoRem(50)};
`;

const AdminChildError = styled.div`
  font-family: Inter;
  font-size: ${pxIntoRem(16)};
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: red;
  margin-top: ${pxIntoRem(20)};
  padding-left: ${pxIntoRem(60)};
`;

const AdminChildLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000000aa;
`;

const AdminChildLoadingCircleKeyframes = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const AdminChildLoadingCircle = styled.div`
  position: relative;
  display: inline-block;
  width: ${pxIntoRem(40)};
  height: ${pxIntoRem(40)};

  &::after {
    content: " ";
    display: block;
    width: ${pxIntoRem(40)};
    height: ${pxIntoRem(40)};
    border-radius: 50%;
    border: ${pxIntoRem(6)} solid #6854fc;
    border-color: #6854fc transparent #6854fc transparent;
    animation: ${AdminChildLoadingCircleKeyframes} 0.8s infinite linear;
  }
`;

export {
  AdminChildBlock,
  AdminChildContent,
  AdminChildInfo,
  AdminChildInfoContentItem,
  AdminChildInfoContentItemInput,
  AdminChildImages,
  AdminChildImagesTitle,
  AdminChildImagesBody,
  AdminChildImage,
  AdminChildImageBlock,
  AdminChildInfoContentItemText,
  AdminChildAvatar,
  AdminChildAvatarImage,
  AdminChildAvatarTitle,
  AdminChildImageDelete,
  AdminChildImageAdd,
  AdminChildButtons,
  AdminChildButton,
  AdminChildError,
  AdminChildAvatarEditor,
  AdminChildAvatarButton,
  AdminChildLoading,
  AdminChildLoadingCircle,
  AdminChildBackButton,
  AdminChildAvatarScale,
  AdminChildInfoContentItemDatePicker,
};
