import React, { useEffect } from "react";
import "./from.css";
import Swal from "sweetalert2";
import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

const HookFrom = () => {
  const form = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      date: "",
    },
    mode: "all",
  });
  const { register, control, handleSubmit, formState, reset } = form;
  const {
    errors,
    isDirty,
    isValid,
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
  } = formState;

  const onSubmit = async (data) => {
    console.log("Form Submited", data);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      // alert("Successfully Submit");
      callAlert();
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onError = (errors, e) => console.log("Form Error", errors);
  const callAlert = () => {
    Swal.fire("Good job!", "Successfully Submit!", "success");
  };
  return (
    <>
      <div className="fromBody">
        <div className="fromHeading">
          <h1> React Hook Form</h1>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              {...register("firstName", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <p className="error">{errors.firstName?.message}</p>
            <label>Last Name</label>
            <input
              type="text"
              id="lastName"
              {...register("lastName", {
                required: { value: true, message: "Last Name is Required " },
              })}
            />
            <p className="error">{errors.lastName?.message}</p>

            <label>Email</label>
            <input
              type="email"
              id="email"
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid E-mail ",
                },
              })}
            />
            <p className="error">{errors.email?.message}</p>
            <label>Age</label>
            <input
              type="number"
              id="age"
              {...register("age", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "Enter the Age",
                },
              })}
            />
            <p className="error">{errors.age?.message}</p>
            <label>Date of Birth</label>
            <input
              type="date"
              id="date"
              {...register("date", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "Enter the Date",
                },
              })}
            />
            <p className="error">{errors.date?.message}</p>

            <button
            // disabled={!isDirty || !isValid}
            >
              Submit
            </button>
          </form>
          {/* <DevTool control={control} /> */}
        </div>
      </div>
    </>
  );
};

export default HookFrom;
