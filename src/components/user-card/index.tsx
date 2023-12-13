import {
  IonAvatar,
  IonImg,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonText,
} from "@ionic/react";
import { User } from "../../types";
import styles from "./style.module.scss";

export const UserCard = ({
  user,
  onRemove,
}: {
  user: User;
  onRemove: () => void;
}) => {
  return (
    <IonItemSliding
      className={`${styles.userItem}`}
    >
      <IonItem
        id={`userItem_${user.id.value}`}
        key={user.id.value}
        lines="none"
      >
        <IonAvatar>
          <IonImg src={user.picture.thumbnail} alt="employee avatar" />
        </IonAvatar>

        <div className={styles.content}>
          <IonText className={styles.name}>
            {user.name.first + " " + user.name.last}
          </IonText>
          <IonText className={styles.email}>{user.email}</IonText>
          <IonText className={styles.location}>
            {user.location.street.name +
              ", " +
              user.location.state +
              ", " +
              user.location.country +
              ", " +
              user.location.postcode}
          </IonText>
        </div>
      </IonItem>

      <IonItemOptions>
        <IonItemOption onClick={onRemove} color="danger">Delete</IonItemOption>
      </IonItemOptions>
    </IonItemSliding>
  );
};
