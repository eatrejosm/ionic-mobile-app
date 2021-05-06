import {  IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './ProductDetails.css';

const ProductDetails: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Product Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Product Details</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Product Details page" />
      </IonContent>
    </IonPage>
  );
};

export default ProductDetails;
