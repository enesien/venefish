import { FC, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { sendPasswordResetEmail } from "firebase/auth";
import { useAuth } from "reactfire";

interface ModalChangePasswordProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalForgotPassword: FC<ModalChangePasswordProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const auth = useAuth();

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      await sendPasswordResetEmail(auth, email);
      toast({
        title: "Success!",
        description: "Password reset email sent; please check your inbox.",
      });
      setIsOpen(false);
    } catch (error) {
      toast({ title: "Error", description: `${error}` });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Forgot password?</DialogTitle>
            <DialogDescription>
              Enter your email to reset your password
            </DialogDescription>
          </DialogHeader>

          <Label htmlFor="email">Email address</Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
            disabled={isLoading}
            name="email"
            type="email"
            required
          />

          <p className="text-[0.8rem] text-white/60 -mt-3">
            We will send you a link to reset your password
          </p>
          <Button disabled={isLoading} onClick={() => onSubmit()}>
            Submit
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};
