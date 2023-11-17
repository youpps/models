import React, { useEffect, useRef, useState } from "react";
import {
  AdminChildAvatar,
  AdminChildAvatarButton,
  AdminChildAvatarEditor,
  AdminChildAvatarImage,
  AdminChildAvatarTitle,
  AdminChildBackButton,
  AdminChildBlock,
  AdminChildButton,
  AdminChildButtons,
  AdminChildContent,
  AdminChildError,
  AdminChildImage,
  AdminChildImageAdd,
  AdminChildImageBlock,
  AdminChildImageDelete,
  AdminChildImages,
  AdminChildImagesBody,
  AdminChildImagesTitle,
  AdminChildInfo,
  AdminChildInfoContentItem,
  AdminChildInfoContentItemInput,
  AdminChildInfoContentItemText,
  AdminChildLoading,
  AdminChildLoadingCircle,
} from "./AdminChildStyles";
import Container from "../../components/Common/Container/Container";
import AdminChildrenService from "../../services/adminChildrenService";
import { AdminChild as AdminChildEntity } from "../../types/child";
import { useNavigate, useParams } from "react-router-dom";
import AdminChildSelect from "./AdminChildSelect/AdminChildSelect";
import moment from "moment";
import AvatarEditor from "react-avatar-editor";
import AuthService from "../../services/authService";

const AdminChild = () => {
  const params = useParams();
  const navigate = useNavigate();

  const editor = useRef<AvatarEditor>(null);

  const [user, setUser] = useState<Omit<AdminChildEntity, "login" | "password"> | null>(null);
  const [child, setChild] = useState<AdminChildEntity | null>(null);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [sex, setSex] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [height, setHeight] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [shoesSize, setShoesSize] = useState("");
  const [city, setCity] = useState("");
  const [video, setVideo] = useState("");

  async function getData() {
    const childId = params.id ?? -1;

    const user = AuthService.getUser();
    const { data: newChild, status } = await AdminChildrenService.getChild(childId);

    if (!newChild || !user || status === "error") {
      AuthService.removeAuth();
      navigate("/admin/login");
      return;
    }

    if (!child) {
      setName(newChild.name);
      setSurname(newChild.surname);
      setSpecialization(newChild.specialization);
      setSex(newChild.sex);
      setBirthDate(newChild.birthDate ? moment(newChild.birthDate).format(`YYYY-MM-DD`) : "");
      setHeight(newChild.height as any);
      setHairColor(newChild.hairColor);
      setEyeColor(newChild.eyeColor);
      setShoesSize(newChild.shoesSize);
      setCity(newChild.city);
      setVideo(newChild.video);
    }

    setUser(user);
    setChild(newChild);

    setIsLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  const validateImage = (file: File) => {
    if (!file || file.size > 30 * 1024 * 1024) {
      return false;
    }

    return true;
  };

  const resizeImage = (file: File, maxSize: number): Promise<Blob> => {
    var reader = new FileReader();
    var image = new Image();

    var canvas = document.createElement("canvas");

    const dataURItoBlob = (dataURI: string) => {
      const bytes = dataURI.split(",")[0].indexOf("base64") >= 0 ? atob(dataURI.split(",")[1]) : unescape(dataURI.split(",")[1]);
      const mime = dataURI.split(",")[0].split(":")[1].split(";")[0];
      const max = bytes.length;
      const ia = new Uint8Array(max);
      for (var i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i);
      return new Blob([ia], { type: mime });
    };

    const resize = () => {
      let width = image.width;
      let height = image.height;
      if (width > height) {
        if (width > maxSize) {
          height *= maxSize / width;
          width = maxSize;
        }
      } else {
        if (height > maxSize) {
          width *= maxSize / height;
          height = maxSize;
        }
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d")?.drawImage(image, 0, 0, width, height);
      const dataUrl = canvas.toDataURL("image/jpeg");
      return dataURItoBlob(dataUrl);
    };

    return new Promise(function (ok, no) {
      if (!file.type.match(/image.*/)) {
        no(new Error("Not an image"));
        return;
      }

      reader.onload = function (readerEvent) {
        image.onload = function () {
          return ok(resize());
        };
        image.src = (readerEvent.target?.result ?? "") as string;
      };

      reader.readAsDataURL(file);
    });
  };

  async function onAvatarChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const files = (e.currentTarget as any).files;
    const file = files[0];

    const isImageValid = validateImage(file);

    if (!isImageValid || !child) {
      e.currentTarget.value = "";
      return;
    }

    setIsLoading(true);

    const formData = new FormData();

    const correctImage = (await resizeImage(file, 1024)) as any;

    formData.append("avatar", correctImage);

    const res = await AdminChildrenService.changeAvatar(child.id, formData);
    if (res.status === "success") {
      getData();
    }
  }

  async function onAvatarResize() {
    if (!editor.current || !child) {
      return;
    }

    const canvas = editor.current.getImageScaledToCanvas();

    setIsLoading(true);

    canvas.toBlob((blob) => {
      if (!blob) {
        return;
      }

      let file = new File([blob], "avatar.jpg", { type: "image/jpeg" });

      const formData = new FormData();

      formData.append("avatar", file);

      AdminChildrenService.changeAvatar(child.id, formData).then(() => {
        setIsLoading(false);
        setChild((prev) => (prev ? { ...prev, isActive: 0 } : null));
      });
    }, "image/jpeg");
  }

  async function onImageAdd(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const files = (e.currentTarget as any).files;
    const file = files[0];

    const isImageValid = validateImage(file);

    if (!isImageValid || !child) {
      e.currentTarget.value = "";
      return;
    }

    setIsLoading(true);

    const formData = new FormData();

    const correctImage = (await resizeImage(file, 1024)) as any;

    formData.append("image", correctImage);

    const res = await AdminChildrenService.addImage(child.id, formData);
    if (res.status === "success") {
      getData();
    }
  }

  async function onImageDelete(imageId: number | string) {
    if (!child) return;

    setIsLoading(true);

    const res = await AdminChildrenService.deleteImage(child.id, imageId);
    if (res.status === "success") {
      getData();
    }
  }

  const isFirst = useRef(true);
  useEffect(() => {
    if (!child) return;
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    AdminChildrenService.updateChild(child.id, {
      name,
      surname,
      specialization,
      sex,
      birthDate,
      height,
      hairColor,
      eyeColor,
      shoesSize,
      city,
      video,
    })
      .then(getData)
      .catch(console.log);
  }, [name, surname, specialization, sex, birthDate, height, hairColor, eyeColor, shoesSize, city, video]);

  async function publishChild() {
    if (!child) return;

    const res = await AdminChildrenService.publishChild(child.id);
    if (res.status === "error") {
      setIsError(true);
      setTimeout(setIsError, 5000, false);
      return;
    }

    getData();
  }

  function onBackClick() {
    if (!user) {
      return;
    }

    if (user.isAdmin) {
      navigate("/admin/children");
      return;
    }

    AuthService.removeAuth();
    navigate("/admin/login");
  }

  return (
    <AdminChildBlock>
      <Container>
        <AdminChildContent>
          <AdminChildInfo>
            <AdminChildBackButton onClick={onBackClick}>{user?.isAdmin ? "Назад" : "Выйти"}</AdminChildBackButton>

            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Имя</AdminChildInfoContentItemText>
              <AdminChildInfoContentItemInput value={name} onChange={(e) => setName(e.currentTarget.value)} placeholder="Введите имя" />
            </AdminChildInfoContentItem>
            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Фамилия</AdminChildInfoContentItemText>
              <AdminChildInfoContentItemInput value={surname} onChange={(e) => setSurname(e.currentTarget.value)} placeholder="Введите фамилию" />
            </AdminChildInfoContentItem>
            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Направление</AdminChildInfoContentItemText>
              <AdminChildSelect value={specialization} values={["Модели", "Актеры", "Модели/Актеры"]} onChange={setSpecialization} placeholder="Выберите направление" />
            </AdminChildInfoContentItem>
            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Пол</AdminChildInfoContentItemText>
              <AdminChildSelect value={sex} values={["Женский", "Мужской"]} onChange={setSex} placeholder="Выберите пол ребенка" />
            </AdminChildInfoContentItem>
            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Дата рождения</AdminChildInfoContentItemText>
              <AdminChildInfoContentItemInput value={birthDate} onChange={(e) => setBirthDate(e.currentTarget.value)} placeholder="Укажите дату рождения ребенка (0000-00-00)" />
            </AdminChildInfoContentItem>
            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Рост</AdminChildInfoContentItemText>
              <AdminChildInfoContentItemInput value={height} onChange={(e) => setHeight(e.currentTarget.value)} placeholder="Укажите рост ребенка " />
            </AdminChildInfoContentItem>
            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Цвет волос</AdminChildInfoContentItemText>
              <AdminChildSelect value={hairColor} values={["Блондин", "Брюнет", "Разноцветный", "Русый", "Рыжий", "Седой", "Шатен"]} onChange={setHairColor} placeholder="Выберите цвет волос" />
            </AdminChildInfoContentItem>
            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Цвет глаз</AdminChildInfoContentItemText>
              <AdminChildSelect
                value={eyeColor}
                values={["Буро-желто-зеленые", "Голубые", "Желтые", "Зеленые", "Светло-карие", "Светлые с буро-желтым венчиком", "Серо-голубые", "Серо-зеленые", "Серые", "Синие", "Темно-карие", "Черные"]}
                onChange={setEyeColor}
                placeholder="Выберите цвет волос"
              />
            </AdminChildInfoContentItem>
            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Размер обуви</AdminChildInfoContentItemText>
              <AdminChildInfoContentItemInput value={shoesSize} onChange={(e) => setShoesSize(e.currentTarget.value)} placeholder="Укажите размер обуви" />
            </AdminChildInfoContentItem>
            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Город</AdminChildInfoContentItemText>
              <AdminChildSelect value={city} values={["Москва", "Санкт-Петербург", "Москва/Санкт-Петербург"]} onChange={setCity} placeholder="Выберите город" />
            </AdminChildInfoContentItem>
            <AdminChildInfoContentItem>
              <AdminChildInfoContentItemText>Видиовизитка</AdminChildInfoContentItemText>
              <AdminChildInfoContentItemInput value={video} onChange={(e) => setVideo(e.currentTarget.value)} placeholder="Вставьте ссылку из youtube/VK" />
            </AdminChildInfoContentItem>
          </AdminChildInfo>
          <AdminChildAvatar>
            <AdminChildAvatarTitle>Аватар</AdminChildAvatarTitle>
            {child?.avatar ? <AdminChildAvatarEditor ref={editor} image={child.avatar} scale={1.2} border={100} onMouseUp={onAvatarResize} crossOrigin="anonymous" width={1024} height={1024} /> : <AdminChildAvatarImage src={child?.avatar ?? ""} onChange={onAvatarChange} />}
            {child?.avatar && <AdminChildAvatarButton onChange={onAvatarChange}>Заменить</AdminChildAvatarButton>}
          </AdminChildAvatar>
        </AdminChildContent>
        <AdminChildImages>
          <AdminChildImagesTitle>Портфолио</AdminChildImagesTitle>
          <AdminChildImagesBody>
            {child?.images?.map((image) => {
              return (
                <AdminChildImageBlock key={image.id}>
                  <AdminChildImageDelete onClick={() => onImageDelete(image.id)} src="/images/delete.svg" />
                  <AdminChildImage src={image.url} />
                </AdminChildImageBlock>
              );
            })}

            {(child?.images?.length ?? 12) < 12 && <AdminChildImageAdd onChange={onImageAdd}></AdminChildImageAdd>}
          </AdminChildImagesBody>
        </AdminChildImages>

        <AdminChildButtons>
          <AdminChildButton isActive={!!!child?.isActive} onClick={publishChild}>
            {!!child?.isActive ? "Скрыть" : "Опубликовать"}
          </AdminChildButton>
        </AdminChildButtons>

        {isLoading && (
          <AdminChildLoading>
            <AdminChildLoadingCircle />
          </AdminChildLoading>
        )}

        {isError && <AdminChildError>Ошибка. Вы не заполнили все поля. 3 или более фото, аватар и все поля должны быть заполнены</AdminChildError>}
      </Container>
    </AdminChildBlock>
  );
};

export default AdminChild;
