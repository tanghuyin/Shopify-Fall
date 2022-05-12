import {
  getFirestore,
  getDocs,
  query,
  collection,
  limit,
} from 'firebase/firestore';

export default function (app) {
  app.get('/inventory', async (res, req) => {
    const db = getFirestore();
    const q = query(collection(db, 'shopify'), limit(5));
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach(async (doc) => {
      console.log(doc.id);
      console.log(doc.data());
    });
    req.send('GET');
  });

  app.post('/inventory', (res, req) => {
    console.log('POST');
  });

  app.put('/inventory/{iID}', (res, req) => {
    console.log('PUT');
  });

  app.delete('/inventory/{iID}', (res, req) => {
    console.log('DELETE');
  });
}
