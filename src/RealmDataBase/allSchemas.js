import Realm from "realm";

export const Precision_Compression_Schema = "Precision_Compression";
export const Precision_Compression_Schema_1 = "Precision_Compression_1";

export const Precision_Compression = {
  name: Precision_Compression_Schema,
  primaryKey: "PC_PkeyID",
  properties: {
    PC_PkeyID: "int",
    SUCTION_PSI: "int",
    DISCHARGE_PS: "int",
    FLOW_RATE_MCF: "string?",
  },
};
export const Precision_Compression_1 = {
  name: Precision_Compression_Schema_1,
  primaryKey: "PC_PkeyID",
  properties: {
    PC_PkeyID: "int",
    SUCTION_PSI: "int",
    DISCHARGE_PS: "int",
    FLOW_RATE_MCF: "string?",
  },
};
const databaseOptions = {
  path: "preciouscomression4.realm",
  schema: [Precision_Compression, Precision_Compression_1],
  schemaVersion: 4,
};
export const InsertDataMaster = (data) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(Precision_Compression_Schema, data);
          resolve();
          console.log("successinsert");
        });
      })
      .catch((error) => {
        console.log("InsertErrorAnswer", error);
        reject(error);
      });
  });
export const queryAllDataMaster = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let asnwer = realm.objects(Precision_Compression_Schema);
        // console.log("single user data", JSON.parse(JSON.stringify(asnwer)));
        resolve([JSON.parse(JSON.stringify(asnwer))]);
        console.log("suucessfully display");
      })
      .catch((error) => {
        console.log("queryAllAnswerMastererror", error);
        reject(error);
      });
  });

export const DeleteDataMaster = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let QuizMaster = realm.objects(Precision_Compression_Schema); //.filtered('Inv_Con_pkeyId = "' + id + '"');
          realm.delete(QuizMaster);
          resolve();
          console.log("successdeleteQuizMaster");
        });
      })
      .catch((error) => {
        console.log("DeleteAnserMaster", error);
        reject(error);
      });
  });
export const InsertData_1Master = (data) =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          realm.create(Precision_Compression_Schema_1, data);
          resolve();
          console.log("successinsert");
        });
      })
      .catch((error) => {
        console.log("InsertErrorAnswer", error);
        reject(error);
      });
  });
export const queryAllData_1Master = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        let asnwer = realm.objects(Precision_Compression_Schema_1);
        // console.log("single user data", JSON.parse(JSON.stringify(asnwer)));
        resolve([JSON.parse(JSON.stringify(asnwer))]);
        console.log("suucessfully display");
      })
      .catch((error) => {
        console.log("queryAllAnswerMastererror", error);
        reject(error);
      });
  });

export const DeleteData_1Master = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        realm.write(() => {
          let QuizMaster = realm.objects(Precision_Compression_Schema_1); //.filtered('Inv_Con_pkeyId = "' + id + '"');
          realm.delete(QuizMaster);
          resolve();
          console.log("successdeleteQuizMaster");
        });
      })
      .catch((error) => {
        console.log("DeleteAnserMaster", error);
        reject(error);
      });
  });
export const querySelectedDataMaster = (data, data1) =>
  new Promise((resolve, reject) => {
    console.log(
      `querySelectedDataMaster,SUCTION_PSI ${data},DISCHARGE_PS ${data1}`
    );
    Realm.open(databaseOptions)
      .then((realm) => {
        let user = realm
          .objects(Precision_Compression_Schema)
          // `HC_Address CONTAINS[c] "${zipsrting}"`
          .filtered(`SUCTION_PSI = "${data1}" &&  DISCHARGE_PS= "${data}"`);
        console.log("single user data", JSON.parse(JSON.stringify(user)));
        resolve([JSON.parse(JSON.stringify(user))]);
      })
      .catch((error) => {
        console.log("queryAllQuizMastererror", error);
        reject(error);
      });
  });
export const querySelectedDataMaster_1 = (data, data1) =>
  new Promise((resolve, reject) => {
    console.log("minallll131231", data, data1);
    Realm.open(databaseOptions)
      .then((realm) => {
        let user = realm
          .objects(Precision_Compression_Schema_1)
          .filtered(`SUCTION_PSI = "${data1}" &&  DISCHARGE_PS= "${data}"`);
        // console.log("single user data", JSON.parse(JSON.stringify(user)));
        resolve([JSON.parse(JSON.stringify(user))]);
      })
      .catch((error) => {
        console.log("queryAllQuizMastererror", error);
        reject(error);
      });
  });
export default new Realm(databaseOptions);
