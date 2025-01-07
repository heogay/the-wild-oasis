import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginAPI } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginAPI({ email, password }),
    onSuccess: (user) => {
      navigate("/", { replace: true });
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (err) => {
      console.error("ERR", err);
      toast.error("Invalid credentials");
    },
  });
  return { login, isPending };
}
