import React, { useEffect, useRef, useState } from "react";
import {
  AdminChildAvatar,
  AdminChildAvatarButton,
  AdminChildAvatarEditor,
  AdminChildAvatarImage,
  AdminChildAvatarTitle,
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
import { useParams } from "react-router-dom";
import AdminChildSelect from "./AdminChildSelect/AdminChildSelect";
import moment from "moment";
import AvatarEditor from "react-avatar-editor";

const AdminChild = () => {
  const params = useParams();
  const editor = useRef<AvatarEditor>(null);

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
    const newChild = await AdminChildrenService.getChild(childId);
    if (!newChild) {
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

    formData.append("avatar", file);

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

    canvas.toBlob((blob) => {
      if (!blob) {
        return;
      }

      let file = new File([blob], "avatar.jpg", { type: "image/jpeg" });

      const formData = new FormData();

      formData.append("avatar", file);

      AdminChildrenService.changeAvatar(child.id, formData);
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

    formData.append("image", file);

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

  return (
    <AdminChildBlock>
      <Container>
        <AdminChildContent>
          <AdminChildInfo>
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
            {child?.avatar ? <AdminChildAvatarEditor ref={editor} image={child.avatar} scale={1.1} border={0} onMouseUp={onAvatarResize} crossOrigin="anonymous" width={2500} height={2500} /> : <AdminChildAvatarImage src={child?.avatar ?? ""} onChange={onAvatarChange} />}
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
