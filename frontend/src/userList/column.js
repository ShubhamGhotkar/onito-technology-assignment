export const column = [
  {
    name: "Name",
    id: 1,
    selector: (row) => row.name || "N/A",
  },
  {
    name: "Age/Sex",
    selector: (row) => {
      let sex = row.sex || "";

      if (sex) {
        sex = sex.toUpperCase();
        let sexChar = [...sex].splice(0, 1);
        return `${row.dateOfBirthOrAge}Y/${sexChar}` || "N/A";
      } else {
        return `${row.dateOfBirthOrAge}Y/ N/A` || "N/A";
      }
    },
  },
  {
    name: "Mobile",
    selector: (row) => row.mobile || "N/A",
  },
  {
    name: "Address",
    selector: (row) => row.address || "N/A",
  },
  {
    name: "Govt Id",
    selector: (row) => row.govtId || "N/A",
  },
  {
    name: "Guardian Details",
    selector: (row) => row.guardianDetails || "N/A",
  },
  {
    name: "Nationality",
    selector: (row) => row.nationlity || "N/A",
  },
];
