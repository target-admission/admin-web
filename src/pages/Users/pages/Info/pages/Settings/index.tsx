import React from "react";
import { Input, Divider } from "antd";
import {
  Controller,
  //  FieldValues,
  useForm,
} from "react-hook-form";
import { Button } from "@mui/material";
import Label from "@components/Label";
// import { Icon } from "@iconify/react";
// import useAuth from "@/hooks/useAuth";
// import { message } from "@components/antd/message";
// import { useUpdatePassword } from "@/queries/auth";
// import handleResponse from "@/utilities/handleResponse";

const Security: React.FC = () => {
  const {
    // reset, handleSubmit,
    control,
  } = useForm({
    // resolver: joiResolver(loginResolver),
  });
  // const { mutateAsync: updatePassword, isLoading: isSubmitting } =
  //   useUpdatePassword();

  // const onValid = async (d: FieldValues) => {
  //   messageApi.open({
  //     type: "loading",
  //     content: `Creating new password...`,
  //     duration: 0,
  //   });
  //   const res = await handleResponse(() => updatePassword({ ...d }), [200]);
  //   messageApi.destroy();
  //   if (res.status) {
  //     messageApi.success("Password updated successfully!");
  //     reset();
  //   } else messageApi.error(res.message);
  // };
  return (
    <>
      <div className="container max-w-xl mx-auto">
        <p className="pt-5 text-xl">Change Password</p>
        <form
          className="py-2"
          // onSubmit={handleSubmit(onValid)}
        >
          <Controller
            control={control}
            name={"new_password"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Label className="my-2">
                  New Password
                  {/* {error ? (
                    <ErrorSuffix error={error} />
                  ) : (
                    <Tooltip
                      title={"Password should be atleast 6 characters long."}
                       placement="topLeft"
                    >
                       <Icon color={"action"} className="text-base mb-1">
                        <AiFillInfoCircle />
                      </Icon> 
                    </Tooltip>
                  )}  */}
                </Label>
                <Input.Password
                  placeholder="New Password"
                  size="large"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  status={error ? "error" : ""}
                />
              </>
            )}
          />

          <Controller
            control={control}
            name={"cpassword"}
            render={({
              field: { onChange, onBlur, value },
              fieldState: { error },
            }) => (
              <>
                <Label className="my-2">
                  Confirm New Password
                  {/* {error ? (
                    <ErrorSuffix error={error} />
                  ) : (
                    <Tooltip
                      title={"Re-enter your new password"}
                      placement="topLeft"
                    >
                      <Icon icon="ph:info-fill" />
                    </Tooltip>
                  )} */}
                </Label>
                <Input.Password
                  placeholder="Confirm New Password"
                  size="large"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  status={error ? "error" : ""}
                />
              </>
            )}
          />
          <Button
            size="large"
            variant="contained"
            fullWidth
            className="mt-5 bg-slate-600"
            type="submit"
            // disabled={isSubmitting}
          >
            Create New Password
          </Button>
        </form>
        <Divider />
        <p className="py-2 text-xl">Danger Zone</p>
        <div className="grid grid-cols-3 border border-primary p-3 rounded-md gap-4 ">
          <div className="col-span-2">
            <p className=" text-md font-semibold">Suspend User</p>
            <p className="text-xs">
              Suspending a user involves temporarily restricting their access to
              an online platform.
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              className="bg-slate-600 float-right"
              type="submit"
              // disabled={isSubmitting}
            >
              Suspend
            </Button>
          </div>
          <div className="col-span-2">
            <p className=" text-md font-semibold">Delete User</p>
            <p className="text-xs">
              Deleting a user involves temporarily removing their account and
              associated data.
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              className="bg-slate-600 float-right"
              type="submit"
              // disabled={isSubmitting}
            >
              Delete
            </Button>
          </div>
          <div className="col-span-2">
            <p className=" text-md font-semibold">Delete User Permanently</p>
            <p className="text-xs">
              Deleting a user involves permanently removing their account and
              associated data. You will not be able to recover this user.
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              className="bg-slate-600 float-right"
              type="submit"
              // disabled={isSubmitting}
            >
              Delete
            </Button>
          </div>
          <div className="col-span-2">
            <p className=" text-md font-semibold">Restore User</p>
            <p className="text-xs">
              Restoring a user involves reinstating their previously deleted or
              suspended account, and allowing them to regain access and
              functionality."
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              className="bg-slate-600 float-right"
              type="submit"
              // disabled={isSubmitting}
            >
              Restore
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Security;
