import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <h1>Home page</h1>
      <SignedOut>
        <SignUpButton mode="modal">Sign Up</SignUpButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>Logout</SignOutButton>
      </SignedIn>
    </div>
  );
}
