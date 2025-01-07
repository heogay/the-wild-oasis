import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import { signup as signupAPI } from "../../services/apiAuth";

export default function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupAPI({ fullName, email, password }),
    onSuccess: (user) => {
      console.log(user);
      toast.success("New user created. Please check your email to verify!");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { signup, isPending };
}
