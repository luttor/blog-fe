"use client";

import { Blog } from "@/interface/Blog";
import { Formik } from "formik";
import { Schema } from "./SchemaValidation";

interface Props {
  handleSubmit: (values: Blog) => void
}

const FormCreate = ({ handleSubmit }: Props) => {

  const initialValues: Blog = {
    title: '',
    snippet: '',
    body: ''
  }

  return (
    <div className="create-blog content">
      <Formik initialValues={initialValues} onSubmit={(values: Blog) => handleSubmit(values)} validationSchema={Schema}>
        {
          (props) => (
            <div>
              <label htmlFor="title">Blog title:</label>
              <input type="text" name="title" id="title" onChange={props.handleChange} />
              {props.errors.title && props.touched.title ? <div style={{ fontSize: 11, color: "red", textDecoration: "underline", fontWeight: "bold" }}>{props.errors.title}</div> : null}

              <label htmlFor="snippet">Blog snippet:</label>
              <input type="text" name="snippet" id="snippet" onChange={props.handleChange} />
              {props.errors.snippet && props.touched.snippet ? <div style={{ fontSize: 11, color: "red", textDecoration: "underline", fontWeight: "bold" }}>{props.errors.snippet}</div> : null}

              <label htmlFor="body">Blog body:</label>
              <textarea id="body" name="body" onChange={props.handleChange} />
              {props.errors.body && props.touched.body ? <div style={{ fontSize: 11, color: "red", textDecoration: "underline", fontWeight: "bold" }}>{props.errors.body}</div> : null}

              <button type="button" onClick={() => props.handleSubmit()}>Submit</button>
            </div>

          )
        }
      </Formik>

    </div>
  )
}

export default FormCreate