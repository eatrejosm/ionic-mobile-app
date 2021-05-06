import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Promotions.css';

const Promotions: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Promotions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Promotions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Promotions page" />
      </IonContent>
    </IonPage>
  );
};

export default Promotions;
