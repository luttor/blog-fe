import * as Yup from "yup";

export const Schema = Yup.object({
  title: Yup.string().required("Title is required"),
  snippet: Yup.string().required("Snippet is required"),
  body: Yup.string().required("Body is required"),
});
